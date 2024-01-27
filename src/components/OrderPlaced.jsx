import React from "react";
import check from "../assets/check";
function OrderPlaced() {
  return (
    <div style={{ width: "100vw", height: "100vh" }} className="centered">
      <div className="d-flex gap-2">
        <img src={check} alt="" width="40px" />
        <h1>Order Placed</h1>
      </div>
    </div>
  );
}

export default OrderPlaced;
