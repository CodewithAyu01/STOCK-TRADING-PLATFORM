import React from "react";
import { Link } from "react-router-dom"; // Link import zaroori hai

function Universe() {
  const token = sessionStorage.getItem("token");

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5" style={{ color: "#424242", fontWeight: "500" }}>The Zerodha Universe</h1>
        <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>

        {/* Partners Logos */}
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "60%" }} alt="smallcase" />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>Thematic investment platform</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} alt="sensibull" />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>Options trading platform</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "60%" }} alt="goldenpi" />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>Bonds trading platform</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "60%" }} alt="streak" />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>Algo & strategy platform</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{ width: "60%" }} alt="fundhouse" />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>Asset management</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "60%" }} alt="ditto" />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>Insurance platform</p>
        </div>

        <div className="mt-5 mb-5">
          {token ? (
            /* ✅ Localhost hata kar Render Dashboard URL daal diya */
            <a 
              href="https://stock-trading-platform2.onrender.com/" 
              className="btn btn-primary fs-5" 
              style={{ width: "200px", backgroundColor: "#387ed1", border: "none", padding: "10px", borderRadius: "3px", color: "white", textDecoration: "none", display: "inline-block" }}
            >
              Go to Dashboard
            </a>
          ) : (
            /* ✅ a tag ki jagah Link to use kiya internal navigation ke liye */
            <Link 
              to="/signup" 
              className="btn btn-primary fs-5" 
              style={{ width: "200px", backgroundColor: "#387ed1", border: "none", padding: "10px", borderRadius: "3px", color: "white", textDecoration: "none", display: "inline-block" }}
            >
              Sign up now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Universe;