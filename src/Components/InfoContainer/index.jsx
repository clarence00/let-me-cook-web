import React from "react";
import Style from "./style.module.css";

function InfoContainer({ children }) {
  return <div className={Style.info_container}>{children}</div>;
}

export default InfoContainer;
