import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../home/OpenAccount";

function PricingPage() {
  return (
    <>
      <Hero />
      {/* Move Brokerage up so the details follow the pricing boxes directly */}
      <Brokerage />
      {/* Place OpenAccount last as the final call-to-action */}
      <OpenAccount />
    </>
  );
}

export default PricingPage;