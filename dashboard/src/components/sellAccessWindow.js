import React, { useState } from "react";
import "./sellAccessWindow.css";
import api from "../api/axiosInstance";

const SellAccessWindow = ({ stock, onClose }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock.price);

  const total = qty * price;

  const handleSellClick = async () => {
    try {
      await api.post("/newOrder", {
        name: stock.name,
        qty: qty,
        price: price,
        mode: "SELL",
      });

      alert("Stock sold successfully!");
      onClose();
    } catch (err) {
      console.log(err);
      alert("Failed to sell stock.");
    }
  };

  return (
    <div className="modal d-block buy-modal-overlay" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">
          {/* Header */}
          <div className="modal-header">
            <div>
              <h5 className="modal-title fw-bold">Sell {stock.name}</h5>

              <small className="text-muted">NSE • Equity</small>
            </div>

            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          {/* Body */}
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
                <label className="form-label">Price (per share)</label>

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
                    <strong>₹ 50,000.00</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="btn btn-light px-4" onClick={onClose}>
              Cancel
            </button>

            <button className="btn btn-danger px-4" onClick={handleSellClick}>
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellAccessWindow;
