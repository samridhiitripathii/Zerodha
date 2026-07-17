import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  const username = localStorage.getItem("username");

  return (
    <>
      {/* Top Bar */}
      <div
        style={{
          height: "60px",
          background: "#fff",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
          fontWeight: "600",
        }}
      >
        <h5>Dashboard</h5>

        <div>
          👤 Logged in as <strong>{username}</strong>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="dashboard-container">
        <div>
          <WatchList />
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
