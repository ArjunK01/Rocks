import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => console.log(user), [user]);
  const login = (name, password) => {
    axios
      .post("https://uva-cs4750-api.herokuapp.com/login", {
        name,
        password
      })
      .then(res => res.data)
      .then(r =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              r.shopper_id
          )
          .then(r => setUser(r.data))
      )
      .catch(e => console.log("unable to login"));
  };

  const signout = () => {
    setUser(null);
  };

  const sellRock = id => {
    axios
      .post("https://uva-cs4750-api.herokuapp.com/transaction", {
        recipient_id: 0,
        rock_id: id
      })
      .then(() =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          })
      );
  };

  const addToCart = id => {
    axios
      .post("https://uva-cs4750-api.herokuapp.com/addToCart", {
        shopper_id: user.shopperInfo.id,
        rock_id: id
      })
      .then(() =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          })
      );
  };

  const buyRocks = async () => {
    await user.cartRocks.forEach(async rock => {
      await axios.post("https://uva-cs4750-api.herokuapp.com/transaction", {
        recipient_id: user.shopperInfo.id,
        rock_id: rock.rock_id
      });
    });

    setTimeout(
      () =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          }),
      500
    );
  };

  const likeRock = id => {
    axios
      .post("https://uva-cs4750-api.herokuapp.com/likeRock", {
        shopper_id: user.shopperInfo.id,
        rock_id: id
      })
      .then(() =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          })
      );
  };

  const unlikeRock = id => {
    axios
      .post("https://uva-cs4750-api.herokuapp.com/unlikeRock", {
        shopper_id: user.shopperInfo.id,
        rock_id: id
      })
      .then(() =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          })
      );
  };

  const deleteRock = id => {
    axios
      .post("https://uva-cs4750-api.herokuapp.com/deleteRock", {
        rock_id: id
      })
      .then(() =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          })
      );
  };

  const removeCart = id => {
    console.log("REMOVING", id);
    axios
      .post("https://uva-cs4750-api.herokuapp.com/removeFromCart", {
        rock_id: id,
        shopper_id: user.shopperInfo.id
      })
      .then(() =>
        axios
          .get(
            "https://uva-cs4750-api.herokuapp.com/getShopperData?shopper_id=" +
              user.shopperInfo.id
          )
          .then(r => {
            setUser(r.data);
          })
      );
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        signout,
        sellRock,
        addToCart,
        buyRocks,
        likeRock,
        unlikeRock,
        deleteRock,
        removeCart
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
