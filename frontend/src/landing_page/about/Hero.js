import React from "react";

function Hero() {
  return (
    <div className="container" style={{ maxWidth: "1000px" }}>
      {/* Page Title Section */}
      <div className="row p-5 mt-5 text-center">
        <h1 className="fs-2 fw-semibold" style={{ color: "#424242" }}>
          We pioneered the discount broking model in India.<br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="border-bottom mb-5"></div>

      {/* Two-Column History Section */}
      <div className="row p-5 text-muted" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
        <div className="col-lg-6 col-md-12 pe-lg-5 text-start">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. 
          </p>
          <p>
            We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. Over the years, we have worked tirelessly to create an ecosystem that promotes transparency and helps retail investors navigate the complex world of finance.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India in terms of active clients. 
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-lg-6 col-md-12 ps-lg-5 text-start">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors. <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Varsity</a>, our learning module, is one of the largest financial education resources in the world.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Rainmatter</a>, 
            our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets and social causes.
          </p>
          <p>
            Our "Nudge" technology helps traders avoid common behavioral pitfalls, ensuring that our users aren't just trading, but trading responsibly. We believe in a culture of "skin in the game," where we grow only when our clients succeed.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>blog</a> or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;