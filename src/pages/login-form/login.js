// username : emilys  password : emilyspass

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login-form/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);  
        navigate("/");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center my-5" id="contact">
      <h3 className="mb-3">Login Form</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="w-50" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            autoComplete="off"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            autoComplete="off"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="w-50 btn btn-success mt-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

// username : emilys  password : emilyspass