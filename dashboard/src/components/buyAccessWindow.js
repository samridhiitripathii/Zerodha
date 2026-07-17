import React, { useState } from "react";
import "./buyAccessWindow.css";
import api from "../api/axiosInstance";

const BuyAccessWindow = ({ stock, onClose }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock.price);

  const total = qty * price;

  const wallet = Number(localStorage.getItem("walletBalance")) || 0;

  const insufficientBalance = total > wallet;

  const handleBuyClick = async () => {
    try {
      const res = await api.post("/newOrder", {
        name: stock.name,
        qty,
        price,
        mode: "BUY",
      });

      localStorage.setItem("walletBalance", res.data.walletBalance);

      window.dispatchEvent(new Event("walletUpdated"));

      alert("Order placed successfully!");

      onClose();
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.error || "Failed to place order.");
    }
  };

  return (
    <div className="modal d-block buy-modal-overlay" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">
          <div className="modal-header">
            <div>
              <h5 className="modal-title fw-bold">Buy {stock.name}</h5>

              <small className="text-muted">NSE • Equity</small>
            </div>

            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Product</label>

                <select className="form-select">
                  <option>CNC</option>
                  <option>MIS</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Order Type</label>

                <select className="form-select">
                  <option>Market</option>
                  <option>Limit</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Quantity</label>

                <input
                  type="number"
                  className="form-control"
                  min="1"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Price</label>

                <input
                  type="number"
                  className="form-control"
                  step="0.05"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <div className="col-12">
                <div className="alert alert-light border">
                  <div className="d-flex justify-content-between">
                    <span>Required Margin</span>

                    <strong>₹ {total.toFixed(2)}</strong>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <span>Available Margin</span>

                    <strong>₹ {wallet.toLocaleString()}</strong>
                  </div>
                </div>

                {insufficientBalance && (
                  <div className="alert alert-danger mt-2">
                    Insufficient Wallet Balance
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-light px-4" onClick={onClose}>
              Cancel
            </button>

            <button
              className="btn btn-success px-4"
              onClick={handleBuyClick}
              disabled={insufficientBalance}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAccessWindow;
