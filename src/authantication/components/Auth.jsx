import { useContext } from "react";
import Alert from "./Alert";
import { AuthContext } from "../context/AuthContext";

export default function Auth() {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth.status === null && (
        <button className="btn-success btn-block" onClick={auth.login}>Login</button>
      )}

      {auth.status === false && (
        <button className="btn-info btn-block" onClick={auth.login}>Try Again</button>
      )}

      {auth.status === true && (
        <>
          <Alert type={"success"} message={"Login Success"} />
          <button className="btn-danger btn-block" onClick={auth.logout}>Logout</button>
        </>
      )}
    </div>
  );
}
