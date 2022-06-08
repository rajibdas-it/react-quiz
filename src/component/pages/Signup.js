import React from "react";
// import classes from "../Styles/Signup.module.css";
// import Textinput from "../Textinput";
// import Checkbox from "../Checkbox";
// import Button from "../Button";
// import Form from "../Form";
// import Illustration from "./Illustration";

const Signup = () => {
  return (
    <>
      <h1> Create an account</h1>
      <form action="">
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="email" placeholder="Enter Email" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <br />
        <label>
          <input type="checkbox" />
          <span>I agree to the Terms & Conditions</span>
        </label>
        <br />
        <br />
        <button type="submit"> Submit Now</button>
      </form>
      {/* <div className="column">
        <Illustration />
        <Form className={classes.signup}>
          <Textinput type="text" placeholder="Enter name" icon="person" />
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <Textinput type="password" placeholder="Enter password" icon="lock" />
          <Textinput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button><span>Submit Now</span></Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div> */}
    </>
  );
};

export default Signup;
