import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => { // mode: 'BUY' ya 'SELL'
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);

  const handleOrderClick = async () => {
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: mode, 
    });
    // Window band karne ke liye
    mode === "BUY" ? closeBuyWindow() : closeSellWindow();
    alert(`${mode} Order Successful!`);
  };

  return (
    <div className="container" id="buy-window">
      <h3>{mode} {uid}</h3>
      <div className="inputs">
        <fieldset><legend>Qty.</legend><input type="number" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity}/></fieldset>
        <fieldset><legend>Price</legend><input type="number" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice}/></fieldset>
      </div>
      <div className="buttons">
        <button className={mode === "BUY" ? "btn btn-blue" : "btn btn-red"} onClick={handleOrderClick}>{mode}</button>
        <button className="btn btn-grey" onClick={mode === "BUY" ? closeBuyWindow : closeSellWindow}>Cancel</button>
      </div>
    </div>
  );
};
export default BuyActionWindow;