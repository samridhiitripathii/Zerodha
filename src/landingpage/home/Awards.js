import react from "react";

function Awards() {
  return (
    <div className="container mb-5 text-center">
      <div className="row mb-10 p-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src="media/largestBroker.svg"
            alt="Awards Image"
            className="me-5 img-fluid img-hover-zoom mb-10"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="mb-4 mt-5">Largest Broker in India</h1>
          <p className="lead">
            We are the largest broker in India with over 10 million customers
            and a wide range of investment options.
          </p>
          <div className="row mt-10 p-3">
            <div className="col-lg-6 col-sm-12">
              <ul className="text-start">
                <li>
                  
                  <p>Futures & Options </p>
                </li>
                <li>
                  
                  <p>Mutual Funds </p>
                </li>
                <li>
                  
                  <p>Stocks </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul className="text-start">
                <li>
                  <p>Demat Accounts</p>
                </li>
                <li>
                  <p>IPOs</p>
                </li>
                <li>
                  <p>Commodity Derivatives </p>
                </li>
              </ul>
            </div>
            <img
              src="media/pressLogos.png"
              alt="Press Logos"
              className="img-fluid mb-10 mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
