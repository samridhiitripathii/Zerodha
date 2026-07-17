import React from "react";

function Hero() {
  return (
    <div className="container text-muted fs-5">
      {/* Tagline Row */}
      <div className="row p-5 mt-5 mb-5">
        <div className="col-12">
          <h1 className="fs-2 text-center text-dark fw-normal">
            <b>
              We pioneered the discount broking model in India.
              <br /> Now, we are breaking ground with our technology.
            </b>
          </h1>
        </div>
      </div>

      {/* New Row: Story Paragraphs Content */}
      <div className="row fs-6 lead border-top lh-lg p-5 me-5 ms-5 mb-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 pe-md-5">
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mb-4">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 ps-md-5">
          <p className="mb-4">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-4">
            <button
              type="button"
              className="btn btn-link p-0 text-decoration-none fs-5 fw-semibold align-baseline"
            >
              Rainmatter
            </button>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="mb-4">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
