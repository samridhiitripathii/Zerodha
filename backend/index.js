require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const { HoldingModel } = require("./models/HoldingModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrderModel } = require("./models/OrderModel");
const { UserModel } = require("./models/UserModel");

const { positions } = require("./data/data");

app.use(cors());
app.use(bodyParser.json());

// ================= Holdings =================
app.get("/allholdings", authMiddleware, async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({ user: req.user.id });
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch holdings" });
  }
});


// ================= Positions =================

app.get("/allpositions",authMiddleware, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch positions" });
  }
});

app.get("/addpositions",authMiddleware, async (req, res) => {
  try {
    await PositionsModel.insertMany(positions);
    res.json({ message: "Positions added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to add positions" });
  }
});

// ================= Orders =================
app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const user = await UserModel.findById(req.user.id);

    const totalAmount = qty * price;

    const newOrder = new OrderModel({
      user: req.user.id,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    if (mode === "BUY") {
      if (user.walletBalance < totalAmount) {
        return res.status(400).json({
          error: "Insufficient Wallet Balance",
        });
      }
      let holding = await HoldingModel.findOne({ user: req.user.id, name });

      if (holding) {
        const totalQty = holding.qty + qty;
        const newAvg = (holding.avg * holding.qty + price * qty) / totalQty;
        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = price;
        await holding.save();
      } else {
        await HoldingModel.create({
          user: req.user.id,
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }
    } else if (mode === "SELL") {
      user.walletBalance += totalAmount;

      await user.save();
      let holding = await HoldingModel.findOne({ user: req.user.id, name });

      if (!holding) {
        return res.status(404).json({ error: "Holding not found" });
      }
      if (holding.qty < qty) {
        return res.status(400).json({ error: "Not enough quantity to sell" });
      }

      holding.qty -= qty;
      holding.price = price;

      if (holding.qty === 0) {
        await HoldingModel.deleteOne({ user: req.user.id, name });
      } else {
        await holding.save();
      }
      user.walletBalance -= totalAmount;

      await user.save();
    }

    res
      .status(201)
      .json({ message: "Order placed successfully!", order: newOrder,
        walletBalance: user.walletBalance,
       });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order." });
  }
});



app.get("/orders", authMiddleware, async (req, res) => {
  try {
    const allOrders = await OrderModel.find({ user: req.user.id });
    res.json(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch orders." });
  }
});


// ===========SIGNUP, LOGIN================


app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration successful",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Registration failed",
    });
  }
});



app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

   res.json({
     token,
     username: user.username,
     email: user.email,
     walletBalance: user.walletBalance,
   });
    
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Login failed",
    });
  }
});



app.post("/addFunds", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    const user = await UserModel.findById(req.user.id);

    user.walletBalance += Number(amount);

    await user.save();

    res.json({
      walletBalance: user.walletBalance,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Unable to add funds",
    });
  }
});

// ================= MongoDB =================

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
