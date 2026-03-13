import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  const token = sessionStorage.getItem("token");
  const username = sessionStorage.getItem("username");

  return (
    <div className="container p-5 mb-5 text-center">
      <h1 className="mt-5" style={{ color: "#424242", fontSize: "2.1rem" }}>Open a Zerodha account</h1>
      <p className="mt-3 text-muted fs-5">Modern platforms and apps, ₹0 investments, and flat ₹20 trades.</p>
      
      {token ? (
        <a 
          href={`https://stock-trading-platform2.onrender.com/?user=${username}`} 
          className="btn btn-primary fs-5 mt-4" 
          style={{ backgroundColor: "#387ed1", padding: "10px 30px", color: "white", textDecoration: "none", display: "inline-block" }}
        >
          Go to Dashboard
        </a>
      ) : (
        <Link to="/signup" className="btn btn-primary fs-5 mt-4" style={{ backgroundColor: "#387ed1", padding: "10px 30px" }}>
          Sign up for free
        </Link>
      )}
    </div>
  );
}

export default OpenAccount;