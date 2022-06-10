import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate("/login");

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password Didnt Match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, confirmPassword);
      navigate("/");
    } catch (err) {
      console.log(err);
      loading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            required
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <span>I agree to the Terms & Conditions</span>
        </label>
        <br />
        <br />
        <button type="submit">Submit Now</button>

        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default SignupForm;
