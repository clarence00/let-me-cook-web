import React from "react";
import Style from "./style.module.css";

import Logo from "../../Assets/Logo.svg";
import Search from "../../Assets/Search.svg";
import Profile from "../../Assets/Profile.svg";
import Bookmark from "../../Assets/Bookmark.svg";
import Settings from "../../Assets/Settings.svg";

function NavBar() {
  return (
    <div className={Style.navbar}>
      <section>
        <img
          className={Style.logo}
          src={Logo}
          alt="logo"
        />
        <span>LET ME COOK</span>
      </section>
      <section>
        <img
          className={Style.search}
          src={Search}
          alt="search"
        />
        <input
          type="text"
          placeholder="Search..."
        />
      </section>
      <section>
        <button>
          <img
            className={Style.btn_icons}
            src={Profile}
            alt="profile"
          />
        </button>
        <button>
          <img
            className={Style.btn_icons}
            src={Bookmark}
            alt="bookmark"
          />
        </button>
        <button>
          <img
            className={Style.btn_icons}
            src={Settings}
            alt="settings"
          />
        </button>
      </section>
    </div>
  );
}

export default NavBar;
