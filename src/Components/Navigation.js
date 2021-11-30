import React, { useContext } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Login from "./Login";
import Inventory from "./Inventory";
import Store from "./Store";
import Cart from "./Cart";

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Inventory /> : <Login />} />
        <Route path="store" element={user ? <Store /> : <Navigate to="/" />} />
        <Route path="cart" element={user ? <Cart /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Navigation;
