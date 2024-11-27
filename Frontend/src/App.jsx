import React from "react";
import Left from "./Home/left/Left";
import Right from "./Home/right/Right";
import Logout from "./Home/left1/Logout";
import "./index.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      {/* <div className="flex h-screen">
        <Logout></Logout>
        <Left></Left>
        <Right></Right>
      </div> */}
      <Signup></Signup>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
