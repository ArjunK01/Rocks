import React from "react";
import "../Styles/Rock.css";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const images = {
  Gneiss:
    "https://flexiblelearning.auckland.ac.nz/rocks_minerals/rocks/images/gneiss3.jpg",
  Hematite: "https://geology.com/rocks/pictures/hematite-380.jpg",
  Marble:
    "https://www.minimegeology.com/shop/images/p.482.1-white_marble_metamorphic_rock.jpg",
  Quartzite: "https://geology.com/rocks/pictures/quartzite.jpg",
  Rhyolite:
    "https://flexiblelearning.auckland.ac.nz/rocks_minerals/rocks/images/rhyolite1.jpg"
};

const Rock = ({ rock, cart, store }) => {
  const {
    sellRock,
    deleteRock,
    addToCart,
    likeRock,
    user,
    unlikeRock,
    removeCart
  } = React.useContext(UserContext);

  return (
    <div className="rock" style={{ overflow: "auto" }}>
      <div
        className="rock-image"
        style={{
          backgroundImage: `url(${images[rock.type_name]}) `,
          backgroundSize: "100% 100%"
        }}
      ></div>
      <div className="rock-info">
        <div className="info-top">
          <div className="type">{rock.type_name}</div>
          <div className="description">{rock.description}</div>
        </div>
        <div className="row">
          <div className="weight">
            Weight: {rock.weight}
            <span>oz</span>
          </div>
          <div className="origin">Origin: {rock.origin}</div>
        </div>
        {cart && `Price: $${(rock.price_per_ounce * rock.weight).toFixed(2)}`}
        {store ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="sell-btn"
              style={{ visibility: cart ? "hidden" : "visible" }}
              onClick={
                store
                  ? () => addToCart(rock.rock_id)
                  : () => sellRock(rock.rock_id)
              }
            >
              {store
                ? `Add to Cart - $${(
                    rock.price_per_ounce * rock.weight
                  ).toFixed(2)}`
                : `Sell - $${(rock.price_per_ounce * rock.weight).toFixed(2)}`}
            </div>
            <div
              className="sell-btn"
              style={{ visibility: cart ? "hidden" : "visible" }}
              onClick={
                user.likedRocks.some(r => rock.rock_id === r.rock_id)
                  ? () => unlikeRock(rock.rock_id)
                  : () => likeRock(rock.rock_id)
              }
            >
              {user.likedRocks.some(r => rock.rock_id === r.rock_id)
                ? "Unlike"
                : "Like"}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="sell-btn"
              onClick={
                !cart
                  ? () => sellRock(rock.rock_id)
                  : () => removeCart(rock.rock_id)
              }
            >
              {!cart
                ? `Sell - $${(rock.price_per_ounce * rock.weight).toFixed(2)}`
                : "Remove from Cart"}
            </div>
            <div
              className="sell-btn"
              style={{ visibility: cart ? "hidden" : "visible" }}
              onClick={() => deleteRock(rock.rock_id)}
            >
              Delete
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rock;
