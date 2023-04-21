import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return (
    <div>
      {auth.status === null ? (
        <button className="btn-success btn block">Login</button>
      ) : auth.status === true ? (
        <>
          <div className="alert success">success</div>
          <button className="btn-danger btn block">Logout</button>
        </>
      ) : (
        <button className="btn-warning btn block">Try Again</button>
      )}
    </div>
  );
};

export default Auth;
