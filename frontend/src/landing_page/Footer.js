import React from "react";
import { Link } from "react-router-dom"; // Don't forget this!

function Footer() {
  return (
    <footer className="border-top bg-light mt-5 py-5">
      <div className="container">
        <div className="row">
          {/* 1. Brand Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <Link to="/">
              <img src="media/images/logo.svg" style={{ width: "130px" }} alt="Logo" className="mb-3" />
            </Link>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              © 2010 - 2026, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
            <div className="fs-5 text-muted d-flex gap-3 mt-3">
              <i className="fa fa-twitter" style={{cursor: 'pointer'}}></i>
              <i className="fa fa-facebook-square" style={{cursor: 'pointer'}}></i>
              <i className="fa fa-instagram" style={{cursor: 'pointer'}}></i>
              <i className="fa fa-linkedin" style={{cursor: 'pointer'}}></i>
            </div>
          </div>

          {/* 2. Company Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fs-6 mb-3">Company</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: "14px", lineHeight: '2' }}>
              <li><Link to="/about" className="text-decoration-none text-muted">About</Link></li>
              <li><Link to="/products" className="text-decoration-none text-muted">Products</Link></li>
              <li><Link to="/pricing" className="text-decoration-none text-muted">Pricing</Link></li>
              {/* Added Signup Link Here */}
              <li><Link to="/signup" className="text-decoration-none text-primary fw-bold">Open an account</Link></li>
              <li><Link to="/signup" className="text-decoration-none text-muted">Referral programme</Link></li>
            </ul>
          </div>

          {/* 3. Support Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fs-6 mb-3">Support</h5>
            <ul className="list-unstyled text-muted" style={{ fontSize: "14px", lineHeight: '2' }}>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>Z-Connect blog</li>
              <li>List of charges</li>
            </ul>
          </div>

          {/* 4. App Store Badges */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fs-6 mb-3">App Store</h5>
            <div className="d-flex flex-column gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                style={{ width: "150px", cursor: "pointer" }} 
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="App Store" 
                style={{ width: "135px", cursor: "pointer", marginLeft: "2px" }} 
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "11px" }}>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;