import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1", color: "#fff" }}>
      {/* Top Navigation Row */}
      <div className="container d-flex justify-content-between p-5" id="supportWrapper">
        <h4 className="fs-4">Support Portal</h4>
        <a href="" style={{ color: "#fff", textUnderlinePosition: "under" }}>Track tickets</a>
      </div>

      {/* Main Content Row */}
      <div className="container row p-5 m-auto">
        {/* Left Column: Search */}
        <div className="col-lg-7 col-md-12 p-3">
          <h1 className="fs-3 mb-4" style={{ fontWeight: "400", lineHeight: "1.5" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="position-relative">
            <input 
              placeholder="Eg: how do I activate F&O, help with repo" 
              className="form-control p-3 mb-3 border-0"
              style={{ borderRadius: "2px", fontSize: "16px" }}
            />
          </div>
          <div className="support-links">
            <a href="" className="text-white me-3 d-inline-block mb-2">Track account opening</a>
            <a href="" className="text-white me-3 d-inline-block mb-2">Track segment activation</a>
            <a href="" className="text-white me-3 d-inline-block mb-2">Intraday margins</a>
            <a href="" className="text-white me-3 d-inline-block mb-2">Kite user manual</a>
          </div>
        </div>

        {/* Right Column: Featured */}
        <div className="col-lg-5 col-md-12 p-3 ps-lg-5">
          <h1 className="fs-4 mb-4" style={{ fontWeight: "400" }}>Featured</h1>
          <ol style={{ lineHeight: "2.5" }}>
            <li>
              <a href="" className="text-white">Current Takeovers and Delisting - March 2026</a>
            </li>
            <li>
              <a href="" className="text-white">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;