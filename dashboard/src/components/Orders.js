import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="orders p-4">
      <h3>Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <table className="table table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Mode</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>

                <td
                  className={
                    order.mode === "BUY"
                      ? "text-success fw-bold"
                      : "text-danger fw-bold"
                  }
                >
                  {order.mode}
                </td>

                <td>{order.qty}</td>

                <td>₹ {order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
