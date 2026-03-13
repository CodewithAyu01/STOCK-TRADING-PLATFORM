import React from "react";

function OpenAccount() {
  const token = sessionStorage.getItem("token");

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col">
          <h1 className="mt-5" style={{ color: "#424242", fontSize: "2.1rem", fontWeight: "500" }}>
            Open a Zerodha account
          </h1>
          <p className="mt-3 text-muted fs-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          
          {token ? (
            <a 
              href="http://localhost:3001" 
              className="btn btn-primary fs-5 mt-4" 
              style={{ backgroundColor: "#387ed1", border: "none", padding: "10px 30px", borderRadius: "3px", minWidth: "200px", color: "white", textDecoration: "none", display: "inline-block" }}
            >
              Go to Dashboard
            </a>
          ) : (
            <a 
              href="/signup" 
              className="btn btn-primary fs-5 mt-4" 
              style={{ backgroundColor: "#387ed1", border: "none", padding: "10px 30px", borderRadius: "3px", minWidth: "200px", color: "white", textDecoration: "none", display: "inline-block" }}
            >
              Sign up for free
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;