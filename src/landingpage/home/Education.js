import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row align-items-centre mb-5">
        <div className=" col-lg-6 col-sm-12 mt-3">
          <img
            src="media/education.svg"
            alt="education"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-lg-6 col-sm-12 mt-3">
          <h3 className="fs-2">Customer First Always</h3>
          <p className="text-muted"></p>
          <br />
          <h3 className="fs-4 mt-2">Free and open market education</h3>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className=" mb-2" href="/support">
            Varsity →
          </a>
          <br />

          <p className="text-muted mt-2">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/support">TradingQ&A →</a>
        </div>
      </div>
    </div>
  );
}

export default Education;
