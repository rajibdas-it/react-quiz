import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../component/Styles/Acc.module.css";
import { useAuth } from "../context/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate("/login");

  async function logOut(e) {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <p>{currentUser.email}</p>
          <span
            className="material - icons - outlined"
            title="Logout"
            onClick={logOut}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="signup">Signup</Link>
          <Link to="login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
