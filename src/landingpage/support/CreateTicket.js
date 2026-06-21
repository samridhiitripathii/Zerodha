import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5 font-sans ">
      {/* Component Title */}
      <h2 className="fs-3 text-dark mb-5 opacity-90 fw-bold">
        To create a ticket, select a relevant topic
      </h2>

      {/* Topics Grid Layout */}
      <div className="row g-5">
        {/* Column 1: Account Opening */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h3 className="fs-5 text-dark mb-4 fw-normal d-flex align-items-center">
            <i className="fa-regular fa-circle-plus me-2 text-muted fs-6"></i>{" "}
            Account Opening
          </h3>
          <div
            className="d-flex flex-col gap-3 flex-column"
            style={{ fontSize: "15px" }}
          >
            <a
              href="#online-account"
              className="text-primary text-decoration-none hover-underline"
            >
              Online Account Opening
            </a>
            <a
              href="#offline-account"
              className="text-primary text-decoration-none hover-underline"
            >
              Offline Account Opening
            </a>
            <a
              href="#company-account"
              className="text-primary text-decoration-none hover-underline"
            >
              Company, Partnership and HUF Account Opening
            </a>
            <a
              href="#nri-account"
              className="text-primary text-decoration-none hover-underline"
            >
              NRI Account Opening
            </a>
            <a
              href="#charges"
              className="text-primary text-decoration-none hover-underline"
            >
              Charges at Zerodha
            </a>
            <a
              href="#bank-account"
              className="text-primary text-decoration-none hover-underline"
            >
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <a
              href="#getting-started"
              className="text-primary text-decoration-none hover-underline"
            >
              Getting Started
            </a>
          </div>
        </div>

        {/* Column 2: Your Zerodha Account */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h3 className="fs-5 text-dark mb-4 fw-normal d-flex align-items-center">
            <i className="fa-regular fa-user me-2 text-muted fs-6"></i> Your
            Zerodha Account
          </h3>
          <div
            className="d-flex flex-col gap-3 flex-column"
            style={{ fontSize: "15px" }}
          >
            <a
              href="#login-credentials"
              className="text-primary text-decoration-none hover-underline"
            >
              Login Credentials
            </a>
            <a
              href="#account-modification"
              className="text-primary text-decoration-none hover-underline"
            >
              Account Modification and Segment Addition
            </a>
            <a
              href="#dp-id"
              className="text-primary text-decoration-none hover-underline"
            >
              DP ID and bank details
            </a>
            <a
              href="#profile"
              className="text-primary text-decoration-none hover-underline"
            >
              Your Profile
            </a>
            <a
              href="#transfer-shares"
              className="text-primary text-decoration-none hover-underline"
            >
              Transfer and conversion of shares
            </a>
          </div>
        </div>

        {/* Column 3: Trading and Platforms */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h3 className="fs-5 text-dark mb-4 fw-normal d-flex align-items-center">
            <i className="fa-regular fa-chart-bar me-2 text-muted fs-6"></i>{" "}
            Trading and Platforms
          </h3>
          <div
            className="d-flex flex-col gap-3 flex-column"
            style={{ fontSize: "15px" }}
          >
            <a
              href="#margin-leverage"
              className="text-primary text-decoration-none hover-underline"
            >
              Margin/leverage, Product and Order types
            </a>
            <a
              href="#kite-web-mobile"
              className="text-primary text-decoration-none hover-underline"
            >
              Kite Web and Mobile
            </a>
            <a
              href="#trading-faqs"
              className="text-primary text-decoration-none hover-underline"
            >
              Trading FAQs
            </a>
            <a
              href="#corporate-actions"
              className="text-primary text-decoration-none hover-underline"
            >
              Corporate Actions
            </a>
            <a
              href="#sentinel"
              className="text-primary text-decoration-none hover-underline"
            >
              Sentinel
            </a>
            <a
              href="#kite-api"
              className="text-primary text-decoration-none hover-underline"
            >
              Kite API
            </a>
            <a
              href="#pi-platforms"
              className="text-primary text-decoration-none hover-underline"
            >
              Pi and other platforms
            </a>
            <a
              href="#stockreports"
              className="text-primary text-decoration-none hover-underline"
            >
              Stockreports+
            </a>
            <a
              href="#gtt"
              className="text-primary text-decoration-none hover-underline"
            >
              GTT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
