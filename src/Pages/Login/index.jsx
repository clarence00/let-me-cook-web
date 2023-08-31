import React from "react";
import Logo from "../../Assets/Logo.svg";
import FacebookLogo from "../../Assets/Facebook.svg";
import GoogleLogo from "../../Assets/Google.svg";
import TwitterLogo from "../../Assets/Twitter.svg";
import "./style.css";

function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="logo-container">
          <img
            className="logo"
            src={Logo}
            alt="Logo"
          />
          <section>LOG IN TO ACCOUNT</section>
        </div>
        <div className="info-container">
          <div className="nav-section">
            <section className="login">
              <a href="#">LOG IN</a>
              <div></div>
            </section>
            <section className="signup">
              <a href="#">SIGN UP</a>
              <div className="hidden"></div>
            </section>
          </div>
          <div className="input-section">
            <section>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
              />
            </section>
            <section>
              <label htmlFor="username">Password</label>
              <input
                type="password"
                id="password"
              />
            </section>
            <a href="#">Forgot Password</a>
          </div>
          <div className="btn-section">
            <button>Log In</button>
            <div></div>
          </div>
          <div className="social-section">
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
        </div>
      </div>
    </>
  );
}

export default Login;
