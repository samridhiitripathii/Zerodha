import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {
  

  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: user.email,
      password: user.password,
    });


    const { token, username, email, walletBalance } = res.data;

 window.location.href = `http://localhost:3001
?token=${encodeURIComponent(token)}
&username=${encodeURIComponent(username)}
&email=${encodeURIComponent(email)}
&walletBalance=${walletBalance}`;
  } catch (err) {
    alert(err.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="card login-card shadow-lg p-4">
        <h2 className="text-center fw-bold mb-4">Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
