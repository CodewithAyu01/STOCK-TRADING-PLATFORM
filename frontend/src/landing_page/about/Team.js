import React from "react";
import { Link } from "react-router-dom"; 
function Team() {
  return (
    <div className="container" style={{ maxWidth: "1000px" }}>
      <div className="row mt-5 mb-5 border-top">
        <h1 className="text-center mt-5 mb-5" style={{ color: "#424242", fontWeight: "500" }}>People</h1>
      </div>

      <div className="row p-3 text-muted justify-content-center" style={{ lineHeight: "1.8" }}>
        {/* Left Side: Founder Image & Title */}
        <div className="col-lg-5 col-md-12 text-center mb-4">
          <img 
            src="media/images/nithinKamath.jpg" 
            alt="Nithin Kamath" 
            style={{ borderRadius: "100%", width: "65%" }} 
          />
          <h4 className="mt-4" style={{ color: "#424242" }}>Nithin Kamath</h4>
          <p style={{ fontSize: "0.95rem" }}>Founder, CEO</p>
        </div>

        {/* Right Side: Detailed Bio */}
        <div className="col-lg-7 col-md-12 p-3" style={{ fontSize: "1.05rem", color: "#444" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). His vision is to create a barrier-free investment ecosystem for all Indians.
          </p>
          <p>
            Apart from finance, Nithin is passionate about the environment and sustainability. Through the <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Rainmatter Foundation</a>, he supports numerous grassroots organizations working on climate change and livelihoods.
          </p>
          <p>
            In his free time, playing basketball is his zen, and he is a big advocate for physical and mental fitness.
          </p>
          <p>
            Connect on <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Homepage</a> / <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>TradingQnA</a> / <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Twitter</a>
          </p>
        </div>
      </div>

      {/* Optional: Footer Note or More Team Members Section */}
      <div className="row text-center mt-5 mb-5">
        <p className="text-muted" style={{ fontSize: "0.9rem" }}>
          We are a team of over 1100+ people who help create the platforms you love. 
          Check out our <Link to="/about" style={{ textDecoration: "none", color: "#387ed1" }}>full team</Link>.
        </p>
      </div>
    </div>
  );
}

export default Team;