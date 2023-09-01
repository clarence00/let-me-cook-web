import React from "react";
import "./style.css";

// import assets/icons
import Logo from "../../Assets/Logo.svg";

function LogoContainer({ children }) {
  return (
    <div className="logo_container">
      <img
        className="logo"
        src={Logo}
        alt="Logo"
      />
      {children}
    </div>
  );
}

export default LogoContainer;
