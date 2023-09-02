import React from "react";
import Style from "./style.module.css";

// import assets/icons
import FacebookLogo from "../../Assets/Facebook.svg";
import GoogleLogo from "../../Assets/Google.svg";
import TwitterLogo from "../../Assets/Twitter.svg";

// import custom components
import CenterWrapper from "../../Components/Wrapper";
import LogoContainer from "../../Components/LogoContainer";
import InfoContainer from "../../Components/InfoContainer";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <CenterWrapper>
        <LogoContainer>
          <section>LOG IN TO ACCOUNT</section>
        </LogoContainer>
        <InfoContainer>
          <div className={Style.nav_section}>
            <section className={Style.login}>
              <a href="">LOG IN</a>
              <div></div>
            </section>
            <section className={Style.signup}>
              <a
                href=""
                onClick={() => navigate("/signup")}>
                SIGN UP
              </a>
              <div className={Style.hidden}></div>
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
              <label htmlFor="0assword">Password</label>
              <input
                type="password"
                id="password"
              />
            </section>
            <a href="#">Forgot Password</a>
          </div>
          <div className={Style.btn_section}>
            <button onClick={() => navigate("/home")}>Log In</button>
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
    </>
  );
}

export default Login;
