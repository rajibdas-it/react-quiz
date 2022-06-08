import React from "react";
import signImg from "../Assets/images/signup.svg";
import classes from "../Styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={signImg} alt="Signup" />
    </div>
  );
};

export default Illustration;
