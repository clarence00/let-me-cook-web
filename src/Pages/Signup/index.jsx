import React from "react";
import Style from "./style.module.css";

// import assets/icons
import FacebookLogo from "../../Assets/Facebook.svg";
import GoogleLogo from "../../Assets/Google.svg";
import TwitterLogo from "../../Assets/Twitter.svg";

// import custom components
import CenterWrapper from "../../Components/CenterWrapper";
import LogoContainer from "../../Components/LogoContainer";
import InfoContainer from "../../Components/InfoContainer";

import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className={Style.body}>
      <CenterWrapper>
        <LogoContainer>
          <section>CREATE AN ACCOUNT</section>
        </LogoContainer>
        <InfoContainer>
          <div className={Style.nav_section}>
            <section className={Style.login}>
              <a
                href=""
                onClick={() => navigate("/login")}>
                LOG IN
              </a>
              <div className={Style.hidden}></div>
            </section>
            <section className={Style.signup}>
              <a href="">SIGN UP</a>
              <div></div>
            </section>
          </div>
          <div className={Style.input_section}>
            <section>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
              />
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
              />
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
              />
            </section>
          </div>
          <div className={Style.btn_section}>
            <button onClick={() => navigate("/login")}>Sign Up</button>
            <div></div>
          </div>
          <div className={Style.social_section}>
            <a href="#">
              <img
                src={GoogleLogo}
                alt="#"
              />
            </a>
            <a href="#">
              <img
                src={FacebookLogo}
                alt="#"
              />
            </a>
            <a href="#">
              <img
                src={TwitterLogo}
                alt="#"
              />
            </a>
          </div>
        </InfoContainer>
      </CenterWrapper>
    </div>
  );
}

export default SignUp;
