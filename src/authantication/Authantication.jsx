import React, { useEffect, useRef, useState } from "react";
import Auth from "./components/Auth";
import { AuthContext } from "./context/AuthContext";

export default function Authantication() {
  // Ui control
  const [ui, setUi] = useState({
    wrapper: true,
    title: "Authanticate",
  });
const [animateDenied, setAnimateDenied] = useState(false);
const [authStatus, setAuthStatus] = useState(null)
const [userAuth, setUserAuth] = useState({
    name: "",
    password: "",
  });

  const login =()=>{
    if(userAuth.name === "Ömer" && userAuth.password === "1234"){
      setAuthStatus(true)
      clearInputs()
      authenticate()
    }else{
      setAuthStatus(false)
      setAnimateDenied(true)
      setTimeout(() => {
        setAnimateDenied(false)
      }, 600);
    }
  }
  const logout =()=>{
    window.location.reload(true)
  }
  const clearInputs =()=>{
    setUserAuth({
      name:"",
      password:"",
    })
  }

  const authenticate =()=>{
    setUi({wrapper:false,title:`Welcome ${userAuth.name}`})
  }

  // focus to input
  const inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  }, [inputName]);

  const handleChangeName = (e) => {
    setUserAuth({ ...userAuth, name: e.target.value });
  };
  const handleChangePassword = (e) => {
    setUserAuth({ ...userAuth, password: e.target.value });
  };

  return (
    <div className="container">
      <h1>{ui.title}</h1>
      <AuthContext.Provider value={{status:authStatus,
      login:login,logout:logout}}>
        {ui.wrapper && (
          <div className={animateDenied && "animate active"}>
            <form className="form">
              <label>User Name</label>
              <input
                type="text"
                placeholder="Enter your name..."
                ref={inputName}
                value={userAuth.name}
                onChange={handleChangeName}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password..."
                value={userAuth.password}
                onChange={handleChangePassword}
              />
            </form>
          </div>
        )}
        <Auth />
      </AuthContext.Provider>
    </div>
  );
}
