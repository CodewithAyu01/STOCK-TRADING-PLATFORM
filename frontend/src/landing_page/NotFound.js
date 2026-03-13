import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row text-center justify-content-center">
        <div className="col-12">
          <h1 className="mt-5" style={{ fontSize: "2.5rem", color: "#424242", fontWeight: "500" }}>
            404 Not Found
          </h1>
          <p className="text-muted fs-5 mt-3 mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link 
            to="/" 
            className="btn btn-primary p-2 px-4 fs-5" 
            style={{ backgroundColor: "#387ed1", border: "none", borderRadius: "3px" }}
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;