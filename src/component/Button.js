import React from "react";
import classes from "./Styles/Button.module.css";

const Button = ({ children }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;
