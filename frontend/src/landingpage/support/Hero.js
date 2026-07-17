import React from "react";

export function Hero() {
  return (
    <div
      className="container-fluid text-white py-5 px-4 px-md-5"
      style={{ backgroundColor: "#387ed1" }}
    >
      {/* Top Navbar Area */}
      <div className="container max-width-1200 d-flex justify-content-between align-items-center mb-5 pt-2">
        <span className="fs-5 fw-medium opacity-90">Support Portal</span>
        <a
          href="#track-tickets"
          className="text-white text-decoration-underline text-underline-offset-4 opacity-100 hover-opacity-80"
          style={{ fontSize: "14px" }}
        >
          Track Tickets
        </a>
      </div>
      {/* Main Grid Content */}
      <div className="container max-width-1200 mt-5">
        <div className="row justify-content-between align-items-start g-4">
          {/* Left Column: Search & Quick Links */}
          <div className="col-lg-7 text-start">
            <h2
              className="fw-normal lh-base mb-4 opacity-90"
              style={{ fontSize: "26px", letterSpacing: "0.5px" }}
            >
              Search for an answer or browse help topics{" "}
              <br className="d-none d-md-inline" /> to create a ticket
            </h2>

            {/* Input Box */}
            <div className="pe-lg-4 mb-4">
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                className="form-control border-0 py-3 px-4 shadow-sm text-dark placeholder-muted"
                style={{ borderRadius: "3px", fontSize: "15px" }}
              />
            </div>

            {/* Quick Links */}
            <div
              className="d-flex flex-wrap gap-3"
              style={{ fontSize: "14px" }}
            >
              <a
                href="#track-account"
                className="text-white text-decoration-underline hover-opacity-80"
              >
                Track account opening
              </a>
              <a
                href="#track-segment"
                className="text-white text-decoration-underline hover-opacity-80"
              >
                Track segment activation
              </a>
              <a
                href="#intraday-margins"
                className="text-white text-decoration-underline hover-opacity-80"
              >
                Intraday margins
              </a>
              <a
                href="#kite-manual"
                className="text-white text-decoration-underline hover-opacity-80"
              >
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Column: Featured Section */}
          <div className="col-lg-5 text-start ps-lg-5 mt-5 mt-lg-0">
            <h3
              className="fw-normal mb-3 opacity-95"
              style={{ fontSize: "20px" }}
            >
              Featured
            </h3>
            <ol
              className="text-white ps-3 mb-0"
              style={{ fontSize: "15px", lineHeight: "1.8" }}
            >
              <li className="mb-3 ps-1">
                <a
                  href="#featured-1"
                  className="text-white text-decoration-underline hover-opacity-80"
                >
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li className="ps-1">
                <a
                  href="#featured-2"
                  className="text-white text-decoration-underline hover-opacity-80"
                >
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Dynamic bottom spacing to match your alignment */}
      <br /> <br />
    </div>
  );
}

export default Hero;
