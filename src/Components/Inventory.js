import React from "react";
import "../Styles/Inventory.css";
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
const Inventory = () => {
  return (
    <div className="inventory">
      <div className="sub">Your Rock Inventory</div>
      <div className="your-rocks">
        {rocks.map(rock => (
          <Rock rock={rock} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
