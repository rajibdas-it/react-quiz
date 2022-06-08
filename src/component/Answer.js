import React from "react";
import Checkbox from "../component/Checkbox";
import classes from "../component/Styles/Answer.module.css";
const Answer = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answers" />
    </div>
  );
};

export default Answer;
