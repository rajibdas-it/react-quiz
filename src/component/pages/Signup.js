import React from "react";
import SignupForm from "../SignupForm";

const Signup = () => {
  return (
    <>
      <h1> Create Your account</h1>
      <SignupForm />

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
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div> */}
    </>
  );
};

export default Signup;
