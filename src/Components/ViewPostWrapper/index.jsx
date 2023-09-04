import React from "react";
import Style from "./style.module.css";

function ViewPostWrapper({ children }) {
  return <div className={Style.wrapper}>{children}</div>;
}

export default ViewPostWrapper;
