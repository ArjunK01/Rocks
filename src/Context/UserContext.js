import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(true);
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, signout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
