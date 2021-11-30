import React from "react";
import Rock from "./Rock";
const rocks = [
  {
    description: "Description",
    weight: 12,
    origin: "origin",
    type: "rock_type"
  },
  {
    description: "Description",
    weight: 12,
    origin: "origin",
    type: "rock_type"
  },
  {
    description: "Description",
    weight: 12,
    origin: "origin",
    type: "rock_type"
  },
  {
    description: "Description",
    weight: 12,
    origin: "origin",
    type: "rock_type"
  },
  {
    description: "Description",
    weight: 12,
    origin: "origin",
    type: "rock_type"
  }
];
const Cart = () => {
  return (
    <div className="inventory">
      <div className="sub">Your Rock Inventory</div>
      <div className="your-rocks">
        {rocks.map(rock => (
          <Rock cart={true} rock={rock} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "24px",
          marginBottom: "24px"
        }}
      >
        <div className="sell-btn" style={{ width: "200px" }}>
          Purchase
        </div>
      </div>
    </div>
  );
};

export default Cart;
