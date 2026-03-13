import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Product Details */}
        <div className="col-lg-5 col-md-12 p-5">
          <h1 style={{ color: "#424242", fontWeight: "500" }}>{productName}</h1>
          <p className="mt-4 mb-4" style={{ lineHeight: "1.8", color: "#444" }}>
            {productDesription}
          </p>
          <div>
            <a href={learnMore} className="text-decoration-none" style={{ color: "#387ed1" }}>
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Product Illustration */}
        <div className="col-lg-7 col-md-12 p-5 text-center">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;