import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="fw-bold">The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading experience even further with our partner
            platforms.
          </p>
        </div>
      </div>

      {/* Partner Logos Grid */}
      <div className="row text-center align-items-center g-4 mb-5">
        {/* Column 1 */}
        <div className="col-md-4">
          <div className="p-3 mb-4">
            <img
              src="media/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
          <div className="p-3">
            <img
              src="media/streakLogo.png"
              alt="Streak"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-md-4">
          <div className="p-3 mb-4">
            <img
              src="media/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
          <div className="p-3">
            <img
              src="media/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-4">
          <div className="p-3 mb-4">
            <img
              src="media/goldenpiLogo.png"
              alt="GoldenPi"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
          <div className="p-3">
            <img
              src="media/dittoLogo.png"
              alt="Ditto"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>
      </div>

      {/* Centered Button Section */}
      <div className="text-center">
        <Link
          to="/signup"
          className="btn btn-primary px-4 py-2"
          style={{
            width: "150px",
          }} /* Using a fixed pixel width keeps it looking sharp on mobile too */
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Universe;
