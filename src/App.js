import React from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "./routes/DefaultRoutes";
import AuthProvider from "./store/AuthProvider";
import "./app/App.css";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <DefaultRoutes/>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
