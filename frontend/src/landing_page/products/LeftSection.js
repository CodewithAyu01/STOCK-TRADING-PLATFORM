import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Product Illustration */}
        <div className="col-lg-7 col-md-12 p-5">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>

        {/* Right Side: Product Details */}
        <div className="col-lg-5 col-md-12 p-5">
          <h1 style={{ color: "#424242", fontWeight: "500" }}>{productName}</h1>
          <p className="mt-4 mb-4" style={{ lineHeight: "1.8", color: "#444" }}>
            {productDesription}
          </p>
          
          <div className="mb-4">
            <a href={tryDemo} className="text-decoration-none" style={{ color: "#387ed1" }}>
              Try demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none" style={{ marginLeft: "50px", color: "#387ed1" }}>
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;