import React, {useState, useEffect} from "react"

export const AuthContext = React.createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "",
  });
  const [auth, setAuth] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(user, auth, loggedIn)
  }, [user, auth, loggedIn])

  useEffect(() => {
    const token = localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zNzB9.5ZQ8QjzPux5PzjVNqGAeXG1Ts6xHUdta0YPXOvAGv8Q");
    const user = localStorage.getItem("user");
    if(token && user) {
        addAuth(token, JSON.parse(user));
    }
  }, [])

  const addAuth = (token, user) => {
    setAuth(token);
    setUser(user);
    setLoggedIn(true);
    localStorage.setItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…zNzB9.5ZQ8QjzPux5PzjVNqGAeXG1Ts6xHUdta0YPXOvAGv8Q", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const removeAuth = () => {
    setAuth("");
    setUser({});
    setLoggedIn(false);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, auth, loggedIn, addAuth, removeAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserProvider;
