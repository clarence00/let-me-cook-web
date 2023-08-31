import React from "react";
import "./style.css";
import Logo from "../Assets/Logo.svg";

function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="logo-container">
          <img
            className="logo"
            src={Logo}
            alt="#"
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
            />
            <label htmlFor="username">Password</label>
            <input
              type="password"
              id="password"
            />
            <a href="#">Forgot Password</a>
          </div>
          <div className="btn-section">
            <button>Log In</button>
            <div></div>
          </div>
          <div className="social-section">
            <section>Google</section>
            <section>Facebook</section>
            <section>Twitter</section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
