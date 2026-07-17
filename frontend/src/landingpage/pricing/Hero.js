import React from 'react';

function Hero(){
    return (
      <div className="container align-items-center text-center">
        <h1 className="mt-5 fw-bold p-2">Pricing</h1>
        <p className="text-muted border-bottom p-2 ">
          {" "}
          Free equity investments and flat Rs.20 traday and F&O trades
        </p>
        <br /> <br />
        <div className="row border-bottom mt-0 mb-4 p-5 mx-0">
          <div className="col-lg-4 col-sm-12 text-center p-2">
            <img src="/media/pricing0.svg" alt="Free Equity Delivery" />
            <h1 className="fs-3">Free Equity Delivery</h1>
            <p className="mt-2 text-muted small">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 text-center p-2">
            <img src="/media/intradayTrades.svg" alt="Intraday and F&O Trades" />
            <h1 className="fs-3">Intraday and F&O Trades</h1>
            <p className="mt-2 text-muted small">
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 text-center p-2">
            <img src="/media/pricing0.svg" alt="Free direct MF" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="mt-2 text-muted small">
              All direct mutual fund investments are absolutely free — ₹ 0
              brokerage.
            </p>
          </div>
        </div>
        
      </div>
    );
}

export default Hero;