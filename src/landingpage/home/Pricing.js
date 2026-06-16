import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-4 col-md-12 p-4 ml-2">
          <h1 className="fs-2">Unbeatable Pricing</h1>
          <p className="fs-4 text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See Pricing</a>
        </div>
        <div className="col-lg-2 d-none d-lg-block"></div>

        <div className="col-lg-6 col-md-12">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="display-4 mb-3">₹0</h1>

              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="display-4 mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
