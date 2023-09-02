import React from "react";
import Style from "./style.module.css";

function CenterWrapper({ children }) {
  return <div className={Style.wrapper}>{children}</div>;
}

export default CenterWrapper;
