import React from "react";
import Style from "./style.module.css";

// import assets/icons
import Logo from "../../Assets/Logo.svg";

function LogoContainer({ children }) {
  return (
    <div className={Style.logo_container}>
      <img
        className={Style.logo}
        src={Logo}
        alt="Logo"
      />
      {children}
    </div>
  );
}

export default LogoContainer;
