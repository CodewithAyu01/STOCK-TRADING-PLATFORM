import React, { useEffect, useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow"; // Import karna mat bhulna

const Summary = () => {
  const [displayName, setDisplayName] = useState("User");
  
  // Context se state nikalo taaki window show kar sakein
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

  useEffect(() => {
    // URL se username nikalne ka logic
    const params = new URLSearchParams(window.location.search);
    const user = params.get("username");
    if (user) {
      setDisplayName(user);
    }
  }, []);

  return (
    <>
      <div className="username">
        <h6>Hi, {displayName}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* --- YAHAN BUY/SELL WINDOW RENDER HOGI --- */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode="BUY" />}
      
      {/* Agar Sell ke liye bhi same window use kar rahi ho toh: */}
      {/* {isSellWindowOpen && <BuyActionWindow uid={selectedStockUID} mode="SELL" />} */}
    </>
  );
};

export default Summary;