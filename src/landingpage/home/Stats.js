import react from "react";

function Stats() {
  return (
    <div className="container p-5 text-center">
      <div className="row ">
        <div className="col-lg-6 col-sm-12 p-5 text-start">
          <h1 className="fs-3"> Trust with Confidence</h1>
          <br />
          <br />
          <h3 className="fs-4">Customer First Always</h3>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <br />
          <h3 className="fs-4 mt-2">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <br />
          <h3 className="fs-4">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <br />
          <h3 className="fs-4">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
          <br />
        </div>
        <div className="col-lg-6 col-sm-12 mb-10">
          <img
            src="media/ecosystem.png"
            alt="ecosystem"
            className="img-fluid p-4 mb-10"
          ></img>
          <div className="d-flex gap-5 justify-content-center">
            <a href="#">
              Explore our Products
              <i
                className="fa-solid fa-arrow-right"
                style={{ marginLeft: "10px" }}
              ></i>
            </a>
            <a href="#">Try Kite</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
