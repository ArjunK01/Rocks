import React from "react";
import Header from "./Components/Header";
import "./Styles/App.css";
import UserContextProvider from "./Context/UserContext";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Navigation />
      </UserContextProvider>
    </div>
  );
}

export default App;
