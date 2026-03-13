import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side: Illustration */}
        <div className="col-lg-6 col-md-12 p-5">
          <img 
            src="media/images/largestBroker.svg" 
            alt="Largest Broker" 
            className="img-fluid" 
          />
        </div>

        {/* Right Side: Content */}
        <div className="col-lg-6 col-md-12 p-5 mt-2">
          <h1 className="mb-4" style={{ color: "#424242", fontWeight: "500", fontSize: "2.1rem" }}>
            Largest stock broker in India
          </h1>
          <p className="mb-4" style={{ color: "#444" }}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          
          <div className="row mb-4" style={{ fontSize: "1.05rem" }}>
            <div className="col-6">
              <ul style={{ lineHeight: "2.5", listStyleType: "square" }}>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul style={{ lineHeight: "2.5", listStyleType: "square" }}>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos Section */}
          <img 
            src="media/images/pressLogos.png" 
            alt="Press Logos" 
            style={{ width: "90%", opacity: "0.8" }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;