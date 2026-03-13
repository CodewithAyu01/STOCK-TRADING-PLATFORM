import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Page Title Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 style={{ fontSize: "3rem", color: "#424242", fontWeight: "500" }}>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Features Grid */}
      <div className="row p-5 mt-5 text-center border-bottom">
        {/* Feature 1 */}
        <div className="col-lg-4 col-md-12 p-4">
          <img 
            src="media/images/pricingEquity.svg" 
            style={{ width: "70%" }} 
            alt="Free equity delivery" 
          />
          <h2 className="fs-3 mt-4" style={{ color: "#424242" }}>Free equity delivery</h2>
          <p className="text-muted mt-3" style={{ lineHeight: "1.6" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="col-lg-4 col-md-12 p-4">
          <img 
            src="media/images/intradayTrades.svg" 
            style={{ width: "70%" }} 
            alt="Intraday and F&O" 
          />
          <h2 className="fs-3 mt-4" style={{ color: "#424242" }}>Intraday and F&O trades</h2>
          <p className="text-muted mt-3" style={{ lineHeight: "1.6" }}>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="col-lg-4 col-md-12 p-4">
          <img 
            src="media/images/pricingEquity.svg" 
            style={{ width: "70%" }} 
            alt="Free direct MF" 
          />
          <h2 className="fs-3 mt-4" style={{ color: "#424242" }}>Free direct MF</h2>
          <p className="text-muted mt-3" style={{ lineHeight: "1.6" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;