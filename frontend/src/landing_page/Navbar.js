import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = sessionStorage.getItem("token");
  const username = sessionStorage.getItem("username");

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white">
      <div className="container p-2">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
        
        {/* Yeh Button (Hamburger) hamesha Support ke side mein dikhega mobile par */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarOptions"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Saare Options */}
        <div className="collapse navbar-collapse" id="navbarOptions">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link me-lg-3" to="/support">Support</Link></li>
            
            {/* Desktop aur Mobile dono ke liye ek hi logic */}
            {token && (
              <li className="nav-item mt-3 mt-lg-0">
                <div 
                  className="d-flex align-items-center px-4 py-2 text-white" 
                  style={{ backgroundColor: "#387ed1", borderRadius: "50px", fontSize: "14px" }}
                >
                  <i className="fa fa-user-circle me-2"></i>
                  <span style={{ whiteSpace: "nowrap" }}>Hi, {username}</span>
                  <span className="mx-2">|</span>
                  <button 
                    onClick={handleLogout} 
                    className="btn btn-sm text-white p-0 fw-bold" 
                    style={{ textDecoration: "underline", border: "none", background: "none" }}
                  >
                    Logout
                  </button>
                </div>
              </li>
            )}
            
            {/* Hamburger Icon for Desktop (Optional, but looks cool) */}
            <li className="nav-item d-none d-lg-block ms-3">
              <i className="fa fa-bars text-muted" style={{ fontSize: "20px", cursor: "pointer" }}></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;