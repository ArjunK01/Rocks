import React from "react";
import "../Styles/Store.css";
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

const Store = () => {
  return (
    <div className="inventory">
      <div className="sub">Avaliable Rocks to Purchase</div>
      <div className="your-rocks">
        {rocks.map(rock => (
          <Rock store={true} rock={rock} />
        ))}
      </div>
    </div>
  );
};

export default Store;
