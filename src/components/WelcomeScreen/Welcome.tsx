import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeImage from "../../images/welcomeImage.svg";
import Logo from "../../images/lendrLogo.svg";
import classes from "./Welcome.module.scss";

const Welcome = () => {
  const [showPassword, setShowPassord] = useState(false);
  const togglePassord = () => setShowPassord(!showPassword);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const goTo = useNavigate();

  const [formData, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { value: any; name: any } }) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e?: any) => {
    e.preventDefault();
    console.log("DATA:", formData);

    try {
      if (
        formData.email.includes("@") &&
        formData.password.length > 5 
      ) {
        setloading(true);
        setTimeout(() => {
          goTo("/dashboard");
        }, 3000);
      } else {
        setError(
          `Email address must include "@" and password must be greater then 5 letters`
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={classes.logo}>
        <a href="/">
          <img src={Logo} alt="lendsqr logo" />
        </a>
      </div>

      <section className={classes.section}>
        <div className={classes.imageStyle}>
          {/* // image */}
          <img src={WelcomeImage} alt="welcome to Lendsqr" />
        </div>

        {/* // form starts here */}

        <div className={classes.contentStyle}>
          <h2 className={classes.title}>Welcome!</h2>

          {error !== "" ? (
            <p className={classes.error}>{error}</p>
          ) : (
            <p className={classes.info}>Enter details to login</p>
          )}
          <form>
            <div className={classes.inputWrapper}>
              <input
                name="email"
                type="email"
                placeholder="email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={`${classes.inputWrapper} ${classes.flex}`}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className={classes.show} onClick={togglePassord}>
                {showPassword ? "hide" : "show"}
              </span>
            </div>

            <p className={classes.password}>
              <a href="/" target="_blank">
                Forgotten password?
              </a>
            </p>

            <button
              type="button"
              className={classes.button}
              onClick={handleSubmit}
            >
              {loading ? "Please wait..." : "Log in"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Welcome;
