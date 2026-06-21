import React from 'react';

function LeftSection({
  imageURL,
  productDesc,
  productName,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-6 p-5 ps-3">
          <h1>{productName}</h1>
          <p className="text-muted">{productDesc}</p>

          <div>
            <a href={tryDemo} className="ms-1 me-3">
              Try Demo
            </a>
            <a href={learnMore} className="ms-1 me-3">
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="ms-1 me-3">
              <img
                src="/media/googlePlayBadge.svg"
                className="img-fluid"
                alt="google play"
              />
            </a>
            <a href={appStore} className="ms-1 me-3">
              <img
                src="/media/appstoreBadge.svg"
                className="img-fluid"
                alt="app store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;