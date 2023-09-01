import React from "react";
import Logo from "../../Assets/Logo.svg";
import Search from "../../Assets/Search.svg";
import "./style.css";

function Home() {
  return (
    <>
      <div className="bg"></div>
      <div className="header">
        <div className="fire-logo">
          <img
            className="logo"
            src={Logo}
            alt="#"
          />
        </div>
        <section>
          <div className="lemme"></div>
        </section>
        <section>
          <div className="searchbar">
            <img
              className="search"
              src={Search}
              alt="#"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
