import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Illustration */}
        <div className="col-lg-6 col-md-12 p-5">
          <img 
            src="media/images/varsity.png" 
            alt="Education" 
            style={{ width: "80%" }} 
          />
        </div>

        {/* Right Side: Content */}
        <div className="col-lg-6 col-md-12 p-5">
          <h1 className="mb-4" style={{ color: "#424242", fontSize: "1.8rem", fontWeight: "500" }}>
            Free and open market education
          </h1>
          
          <p className="mb-2">
            Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none" style={{ color: "#387ed1", fontWeight: "500" }}>
            Varsity &nbsp; <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="mt-5 mb-2">
            TradingQ&A, the most active trading and investment community in 
            India for all your market related queries.
          </p>
          <a href="#" className="text-decoration-none" style={{ color: "#387ed1", fontWeight: "500" }}>
            TradingQ&A &nbsp; <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;