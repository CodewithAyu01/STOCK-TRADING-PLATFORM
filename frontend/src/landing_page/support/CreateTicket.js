import React from "react";

function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user-o",
      links: [
        "Login credentials",
        "Account modification and segment addition",
        "DP ID and beneficiary owner ID",
        "Nomination",
        "Transfer and conversion of shares",
      ],
    },
    {
      title: "Trading and Platforms",
      icon: "fa-bar-chart",
      links: [
        "Trading Q&A",
        "Kite",
        "Margins",
        "Product and order types",
        "Corporate actions",
        "Kite features",
      ],
    },
    {
      title: "Funds",
      icon: "fa-credit-card",
      links: [
        "Fund withdrawal",
        "Adding funds",
        "Adding bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      icon: "fa-circle-o-notch",
      links: [
        "IPO",
        "Portfolio",
        "Funds statement",
        "Reports",
        "Referral program",
      ],
    },
    {
      title: "Coin",
      icon: "fa-adjust",
      links: [
        "Understanding mutual funds and Coin",
        "About Coin",
        "Buying and Selling through Coin",
        "Starting an SIP",
        "Managing your Portfolio",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 text-muted mb-5">
          To create a ticket, select a relevant topic
        </h1>

        {categories.map((cat, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-5 mt-2 mb-2">
            <h4 className="fs-5" style={{ color: "#424242", fontWeight: "400" }}>
              <i className={`fa ${cat.icon}`} aria-hidden="true"></i> {cat.title}
            </h4>
            {cat.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                    fontSize: "14px",
                    color: "#387ed1",
                  }}
                >
                  {link}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;