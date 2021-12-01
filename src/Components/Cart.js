import React, { useContext } from "react";
import Rock from "./Rock";
import { UserContext } from "../Context/UserContext";

const Cart = () => {
  const { user, buyRocks } = useContext(UserContext);
  return (
    <div className="inventory">
      <div className="sub">Your Rock Inventory</div>
      <div className="your-rocks">
        {user.cartRocks.map(rock => (
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
        {user.cartRocks.length ? (
          <div
            className="sell-btn"
            style={{ width: "200px" }}
            onClick={
              user.cartRocks
                .reduce((acc, cur) => acc + cur.weight * cur.price_per_ounce, 0)
                .toFixed(2) > user.shopperInfo.balance
                ? null
                : buyRocks
            }
          >
            Purchase - $
            {user.cartRocks
              .reduce((acc, cur) => acc + cur.weight * cur.price_per_ounce, 0)
              .toFixed(2)}
          </div>
        ) : (
          <p>No rocks in the cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
