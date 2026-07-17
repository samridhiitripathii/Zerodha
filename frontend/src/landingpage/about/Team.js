import React from "react";

function Hero() {
  return (
    <div className="container text-muted my-5 border-top">
      {/* People Header */}
      <div className="row pt-5 mb-4 text-center">
        <div className="col-12">
          <h2 className="text-dark fw-normal fs-3">People</h2>
        </div>
      </div>

      {/* Founder Profile Layout */}
      <div className="row pb-5 fs-6 align-items-center">
        {/* Left Side: Photo & Title */}
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <div
            className="img-hover-zoom d-inline-block rounded-circle overflow-hidden"
            style={{ maxWidth: "250px" }}
          >
            <img
              src="media/nithinKamath.jpg"
              className="img-fluid"
              alt="Nithin Kamath - Founder of Zerodha"
            />
          </div>
          <h4 className="text-dark fs-5 mt-3 mb-1">Nithin Kamath</h4>
          <p className="text-muted small">Founder, CEO</p>
        </div>

        {/* Right Side: Bio Text */}
        <div className="col-12 col-md-7 lh-lg ps-md-4">
          <p className="mb-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">Playing basketball is his zen.</p>

          {/* Social Links line */}
          <p className="mb-0 small">
            Connect on{" "}
            <button
              type="button"
              className="btn btn-link p-0 text-decoration-none small align-baseline"
            >
              Homepage
            </button>{" "}
            /{" "}
            <button
              type="button"
              className="btn btn-link p-0 text-decoration-none small align-baseline"
            >
              TradingQnA
            </button>{" "}
            /{" "}
            <button
              type="button"
              className="btn btn-link p-0 text-decoration-none small align-baseline"
            >
              Twitter
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
