import React from "react";
import logo from "../Assets/logo.png";


const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" data-cursorpointer={true} />
      </a>
      <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRANCHISE
      </a>

    </>
  );
};

export default Misc;