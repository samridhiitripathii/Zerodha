import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top py-5 text-muted small">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Logo, Copyright & Socials */}
          <div className="col-12 col-md-3">
            <div className="mb-3">
              {/* Substitute with an actual SVG/img element for the logo */}
              <h5 className="text-primary fw-bold tracking-tight">ZERODHA</h5>
            </div>
            <p className="mb-3 lh-base">
              © 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            {/* Social Icons Container */}
            <div className="d-flex gap-3 fs-5 text-secondary">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-telegram"></i>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="col-6 col-md-3 ps-md-5">
            <h6 className="text-dark fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Referral programme
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Zerodha.tech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Press & media
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Zerodha cares (CSR)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-6 col-md-3">
            <h6 className="text-dark fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Support portal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Z-Connect blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  List of charges
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Downloads & resources
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Account */}
          <div className="col-6 col-md-3">
            <h6 className="text-dark fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Open an account
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  Fund transfer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-muted small"
                >
                  60 day challenge
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row m-5 border-top mb-0" >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related queries please write to
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF Procedure to file a complaint
            on SEBI SCORES: Register on SCORES portal. Mandatory details for
            filing complaints on SCORES: Name, PAN, Address, Mobile Number,
            E-mail ID. Benefits: Effective Communication, Speedy redressal of
            the grievances Investments in securities market are subject to
            market risks; read all the related documents carefully before
            investing. "Prevent unauthorised transactions in your account.
            Update your mobile numbers/email IDs with your stock brokers.
            Receive information of your transactions directly from Exchange on
            your mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (Broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
