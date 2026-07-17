import React from "react";

function RightSection({ imageURL, productDesc, productName, learnMore }) {
  return (
    <div className="container my-5">
      {/* Added margin for breathing room */}
      <div className="row align-items-center">
        {" "}
        {/* Vertically centers the columns */}
        <div className="col-6">
          <h1 className="display-5 ">
            <b>{productName}</b>
          </h1>{" "}
          {/* Boosted font weight */}
          <p className="text-muted my-3">{productDesc}</p>
          <div>
            <a href={learnMore} className="btn btn-outline-primary">
              {" "}
              {/* Turned link into a clean button */}
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6 p-3 text-center">
          {" "}
          {/* Centers the image within its column */}
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid rounded"
          />{" "}
          {/* Added fluid responsiveness */}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
