//username : emilys  password : emilyspass

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../login-form/login.css";
import { useAuth } from "../shoping-cart/authContext";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate, location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordShow = () => {
    setFormData((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (username === "emilys" && password === "emilyspass") {
        login({ username, password });
        localStorage.setItem("token", "fake-jwt-token");
        toast.success("Login Successful");
      } else {
        setError("Invalid username or password.");
        toast.error("Failed to login.");
      }
    }, 1000);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center my-5"
      id="contact"
    >
      <h3 className="mb-3">
        Login <span className="light-red">Form</span>
      </h3>
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
        <div className="form-group position-relative">
          <label htmlFor="password">Password:</label>
          <input
            type={formData.showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="form-control"
            autoComplete="off"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span
            className="position-absolute"
            onClick={togglePasswordShow}
            style={{ cursor: "pointer" }}
          >
            <i
              className={
                formData.showPassword ? "fa fa-eye-slash" : "fa fa-eye"
              }
            ></i>
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="w-50 btn btn-success mt-3"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;


// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "../login-form/login.css";
// import { useAuth } from "../shoping-cart/authContext";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     showPassword: false,
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (isAuthenticated) {
//       const redirectPath = location.state?.from?.pathname || "/";
//       navigate(redirectPath);
//     }
//   }, [isAuthenticated, navigate, location.state]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const togglePasswordShow = () => {
//     setFormData((prevState) => ({
//       ...prevState,
//       showPassword: !prevState.showPassword,
//     }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { username, password } = formData;
//     if (!username || !password) {
//       setError("Both fields are required.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         login({ username, password });
//         toast.success("Login Successfully");
//       } 
//     } catch (error) {
//       setLoading(false);
//       toast.error("Failed to login.");
//     }
//   };

//   return (
//     <div
//       className="container d-flex flex-column align-items-center my-5"
//       id="contact"
//     >
//       <h3 className="mb-3">Login <span className="light-red">Form</span></h3>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form className="w-50" onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="form-control"
//             autoComplete="off"
//             placeholder="Enter your Username"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group position-relative">
//           <label htmlFor="password">Password:</label>
//           <input
//             type={formData.showPassword ? "text" : "password"}
//             id="password"
//             name="password"
//             className="form-control"
//             autoComplete="off"
//             placeholder="Enter your Password"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           <span
//             className="position-absolute"
//             onClick={togglePasswordShow}
//             style={{ cursor: "pointer" }}
//           >
//             <i
//               className={
//                 formData.showPassword ? "fa fa-eye-slash" : "fa fa-eye"
//               }
//             ></i>
//           </span>
//         </div>
//         <div className="d-flex justify-content-center">
//           <button
//             type="submit"
//             className="w-50 btn btn-success mt-3"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// //username : emilys  password : emilyspass
