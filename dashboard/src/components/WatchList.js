import React, { useState } from "react";
import { watchlist } from "../data/data";
import BuyAccessWindow from "./buyAccessWindow";
import SellAccessWindow from "./sellAccessWindow";


import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";

const WatchList = () => {
  return (
    <div
      className="bg-white border-end"
      style={{
        width: "31.85vw",
        minHeight: "100vh",
      }}
    >
      <div className="p-5 border-bottom">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search eg: infy, bse, nifty fut"
          />
          <span className="input-group-text">{watchlist.length} / 50</span>
        </div>
      </div>

      <ul className="list list-group list-group-flush">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

// ==============================

const WatchListItem = ({ stock }) => {
  return (
    <li className="watchlist-item">
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="right-section">
          <div className="market-data">
            <span className="percent">{stock.percent}</span>

            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}

            <span className="price">{stock.price}</span>
          </div>

          <WatchListActions stock={stock} />
        </div>
      </div>
    </li>
  );
};

// ==============================

const WatchListActions = ({ stock }) => {
  const [showBuyWindow, setShowBuyWindow] = useState(false);
const [showSellWindow, setShowSellWindow] = useState(false);


  return (
    <>
      <span className="actions">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => setShowBuyWindow(true)}>
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={() => setShowSellWindow(true)}>
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="btn">
            <MoreHoriz className="icon action" />
          </button>
        </Tooltip>
      </span>

      {showBuyWindow && (
        <BuyAccessWindow
          stock={stock}
          onClose={() => setShowBuyWindow(false)}
        />
      )}
      {showSellWindow && (
        <SellAccessWindow
          stock={stock}
          onClose={() => setShowSellWindow(false)}
        />
      )}
    </>
  );
};
