import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Menu() {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [showProfile, setShowProfile] = useState(false);

  const [walletBalance, setWalletBalance] = useState(
    Number(localStorage.getItem("walletBalance")) || 0,
  );

  useEffect(() => {
    const updateWallet = () => {
      setWalletBalance(Number(localStorage.getItem("walletBalance")) || 0);
    };

    window.addEventListener("walletUpdated", updateWallet);

    return () => {
      window.removeEventListener("walletUpdated", updateWallet);
    };
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("walletBalance");

    window.location.href = "http://localhost:3000/";
  };

  const handleAddFunds = async () => {
    const amount = prompt("Enter amount to add");

    if (!amount || Number(amount) <= 0) return;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/addFunds`,
        {
          amount: Number(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.setItem("walletBalance", res.data.walletBalance);

      setWalletBalance(res.data.walletBalance);

      window.dispatchEvent(new Event("walletUpdated"));

      alert("Funds Added Successfully!");
    } catch (err) {
      console.error(err);
      alert("Unable to add funds");
    }
  };

  return (
    <div className="menu-container sticky">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />

      <div className="menus mt-4">
        <ul>
          <li>
            <Link
              to="/"
              className="text-decoration-none"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              className="text-decoration-none"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              className="text-decoration-none"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              className="text-decoration-none"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              className="text-decoration-none"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li className="mt-4 text-center">
            <div
              className="profile-section"
              onClick={() => setShowProfile(!showProfile)}
              style={{ cursor: "pointer" }}
            >
              <FaUserCircle size={35} />
              <span className="mx-2">{username}</span>
              <IoIosArrowDown />
            </div>
          </li>
        </ul>

        <hr />

        {showProfile && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <FaUserCircle size={45} />

              <div className="ms-2">
                <h6>{username}</h6>
                <small>{email}</small>
              </div>
            </div>

            <hr />

            <div className="dropdown-item d-flex justify-content-between">
              <span>💰 Wallet Balance</span>
              <span>₹ {walletBalance.toLocaleString()}</span>
            </div>

            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleAddFunds}
            >
              Add Funds
            </button>

            <div className="dropdown-item mt-3">📈 Portfolio Value</div>

            <div className="dropdown-item">📊 Holdings</div>

            <div className="dropdown-item">⚙ Account</div>

            <hr />

            <button className="btn btn-danger w-100" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
