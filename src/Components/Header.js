import React, { useContext } from "react";
import "../Styles/Header.css";
import image from "../Images/r3.png";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signout } = useContext(UserContext);
  return (
    <div className="header">
      <div className="logo">
        <img src={image} />
        <div>Rock Stock</div>
      </div>
      {user ? (
        <div className="nav">
          <div>
            <Link
              style={{
                textDecoration: "none",
                marginLeft: "0px",
                color: "black"
              }}
              to="/"
            >
              My Rocks
            </Link>
          </div>
          <div>
            <Link
              style={{
                textDecoration: "none",
                marginLeft: "0px",
                color: "black"
              }}
              to="store"
            >
              Rock Store
            </Link>
          </div>
          <div>
            <Link
              style={{
                textDecoration: "none",
                marginLeft: "0px",
                color: "black"
              }}
              to="cart"
            >
              Cart
            </Link>
          </div>
          <div onClick={signout}>Sign Out</div>
        </div>
      ) : (
        <div className="nav">
          <div>Log in</div>
        </div>
      )}
    </div>
  );
};

export default Header;
