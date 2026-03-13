import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5" style={{ marginTop: "100px" }}>
      <div className="text-center mt-5 p-5">
        <h1 style={{ fontSize: "3rem", color: "#424242", fontWeight: "500" }}>
          Technology
        </h1>
        <h3 className="text-muted mt-3 fs-4" style={{ fontWeight: "400" }}>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;