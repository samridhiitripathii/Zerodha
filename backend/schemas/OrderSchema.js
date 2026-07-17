const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrderSchema };