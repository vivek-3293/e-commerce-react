// username : emilys  password : emilyspass

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../login-form/login.css";
import { useAuth } from "../shoping-cart/authContext";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.token) {
        localStorage.setItem('token', data.token);  
        login({ username });
        navigate("/");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setLoading(false);
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
            value={formData.username}
            onChange={handleInputChange}
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
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="w-50 btn btn-success mt-3" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;



// username : emilys  password : emilyspass

