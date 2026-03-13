import React from "react";

function Stats() {
  return (
    <div className="container p-5 mt-5">
      <div className="row align-items-center">
        {/* Left Side: Content */}
        <div className="col-lg-6 col-md-12 p-5">
          <h1 className="fs-2 mb-5" style={{ color: "#424242", fontWeight: "500" }}>Trust with confidence</h1>
          
          <h2 className="fs-4 mt-5" style={{ color: "#424242" }}>Customer-first always</h2>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            That's why 1.3+ crore customers trust Zerodha with ₹4.5+ lakh crores 
            worth of equity investments.
          </p>

          <h2 className="fs-4 mt-4" style={{ color: "#424242" }}>No spam or gimmicks</h2>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            No gimmicks, spam, "gamification", or annoying push notifications. 
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-4" style={{ color: "#424242" }}>The Zerodha universe</h2>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+ 
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-4" style={{ color: "#424242" }}>Do better with money</h2>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            With initiatives like Nudge and Kill Switch, we don't just facilitate 
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Side: Image and Links */}
        <div className="col-lg-6 col-md-12 p-5 text-center">
          <img 
            src="media/images/ecosystem.png" 
            style={{ width: "100%" }} 
            alt="Ecosystem" 
          />
          <div className="text-center mt-4">
            <a href="#" className="mx-4 text-decoration-none" style={{ color: "#387ed1" }}>
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none" style={{ color: "#387ed1" }}>
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;