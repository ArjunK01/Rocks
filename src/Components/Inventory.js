import React from "react";
import "../Styles/Inventory.css";
import Rock from "./Rock";
import { UserContext } from "../Context/UserContext";

const Inventory = () => {
  const { user } = React.useContext(UserContext);

  const [sorted, setSorted] = React.useState(false);

  return (
    <div className="inventory">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div className="sub">Your Rock Inventory</div>
        <div
          style={{
            padding: "8px 16px",
            border: "2px solid black",
            backgroundColor: sorted ? "#47516d" : "white",
            color: sorted ? "white" : "black",
            cursor: "pointer"
          }}
          onClick={() => setSorted(sorted => !sorted)}
        >
          Sorted by {sorted ? "Increasing" : "Decreasing"} Price
        </div>
      </div>
      <div className="your-rocks">
        {user.ownedRocks
          .sort((a, b) =>
            sorted
              ? (a.price_per_ounce * a.weight).toFixed(2) -
                (b.price_per_ounce * b.weight).toFixed(2)
              : (b.price_per_ounce * b.weight).toFixed(2) -
                (a.price_per_ounce * a.weight).toFixed(2)
          )
          .map(rock => (
            <Rock rock={rock} />
          ))}
        {user.ownedRocks.length === 0 && <p>No Rocks in Inventory</p>}
      </div>
    </div>
  );
};

export default Inventory;
