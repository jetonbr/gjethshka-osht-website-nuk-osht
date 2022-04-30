import React, { useContext, useEffect } from "react";
import DefaultRoutes from "./DefaultRoutes";
import UserProvider from "./UserContext";
import "./app/App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <DefaultRoutes/>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
