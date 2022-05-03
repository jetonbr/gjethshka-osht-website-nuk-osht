import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userInitialState);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //TODO: Momentin kur bohet refresh e mer tokenin prej localstorage edhe e bon refresh tokenin per me e kontrollu authin nese eshte ende aktive.
    const refreshAuthentication = async () => {
      const oldToken = localStorage.getItem("token");
      const oldUser = localStorage.getItem("user");
      // TODO: duhesh me e bo refresh authentiaction nese ekziston requesti
      if(oldToken && oldUser) {
        setToken(oldToken);
        setIsLoggedIn(true);
        setUser(JSON.parse(oldUser));
      }
    } 
    refreshAuthentication()
  }, []);

  const clearAuth = () => {
    // TODO: e bojme logout komplet appin tu i bo clear krejt te dhenat. I shtohen clear memorjet tjera te nevojshme
    setUser(null);
    setIsLoggedIn(false);
    localStorage.clear();
    // TODO: e thirr auth/logout requestin per me e lajmru backendin qe me bo expire tokenin
  };

  const setAuth = (data) => {
    setToken(data.token);
    setUser(data.user);
    setIsLoggedIn(true);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const userInitialState = {
  id: 0,
  createdAt: "",
  updatedAt: "",
  deletedAt: null,
  displayName: null,
  email: "",
  referenceId: null,
  isProfile: false,
  coins: 0,
  birthDate: "",
  country: "",
  address: null,
  zipCode: 0,
  gender: 0,
  lookingFor: 0,
  height: 0,
  hairColour: "",
  eyeColour: "",
  figure: "",
  smoker: "",
  seeking: "",
  relationShipStatus: "",
  children: "",
  job: "",
  language: "",
  flirtText: "",
  role: 0,
  verificationCode: "",
  isVerified: false,
  registerFromIp: null,
  isOnline: false,
  socketId: "",
  mainImage: null,
};
