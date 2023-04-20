import { useState } from "react";

const Authantication = () => {
  const [ui, setUi] = useState({
    wrapper: true,
    title: "Authanticate",
  });
  const [animateDenied, setAnimateDenied] = useState(false)
  return (
    <div className="container">
      <h1>{ui.title}</h1>
      {ui.wrapper && (
        <div className={animateDenied && "active"}>
          <form className="form" action="">
            <label htmlFor="">User name</label>
            <input type="text" placeholder="Enter your name!" value="" />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter your password!"
              value=""
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Authantication;
