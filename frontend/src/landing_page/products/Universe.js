import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const token = sessionStorage.getItem("token");
  const username = sessionStorage.getItem("username");

  return (
    <div className="container mt-5 text-center">
      <h1 className="mt-5" style={{ color: "#424242", fontWeight: "500" }}>The Zerodha Universe</h1>
      <p className="mt-3">Partner platforms for your investment experience</p>

      <div className="row mt-5">
        {/* Images remain the same as your previous code */}
        {["smallcaseLogo.png", "sensibullLogo.svg", "goldenpiLogo.png", "streakLogo.png", "zerodhaFundhouse.png", "dittoLogo.png"].map((img, i) => (
          <div key={i} className="col-lg-4 col-md-6 p-3">
            <img src={`media/images/${img}`} style={{ width: "60%" }} alt="logo" />
          </div>
        ))}
      </div>

      <div className="mt-5 mb-5">
        {token ? (
          <a 
            href={`https://stock-trading-platform2.onrender.com/?user=${username}`} 
            className="btn btn-primary fs-5" 
            style={{ width: "200px", backgroundColor: "#387ed1", color: "white", textDecoration: "none", display: "inline-block", padding: "10px" }}
          >
            Go to Dashboard
          </a>
        ) : (
          <Link to="/signup" className="btn btn-primary fs-5" style={{ width: "200px", backgroundColor: "#387ed1", padding: "10px" }}>
            Sign up now
          </Link>
        )}
      </div>
    </div>
  );
}

export default Universe;