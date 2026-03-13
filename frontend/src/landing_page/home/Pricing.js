import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Heading and Text */}
        <div className="col-lg-4 col-md-12 mb-5">
          <h1 className="mb-3" style={{ color: "#424242", fontSize: "2.1rem", fontWeight: "500" }}>
            Unbeatable pricing
          </h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none" style={{ color: "#387ed1", fontWeight: "500" }}>
            See pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Right Side: The Three Feature Boxes */}
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col border p-4 text-center">
              <h1 className="mb-2" style={{ color: "#fbb03b", fontSize: "2.5rem" }}>₹0</h1>
              <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                Free equity delivery and<br />direct mutual funds
              </p>
            </div>
            <div className="col border p-4 text-center">
              <h1 className="mb-2" style={{ color: "#fbb03b", fontSize: "2.5rem" }}>₹20</h1>
              <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;