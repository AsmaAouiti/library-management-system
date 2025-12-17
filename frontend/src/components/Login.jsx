import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

  
    const adminEmail = "admin@example.com"; // admin email
    const adminPassword = "admin123";       // admin password

    if (email === adminEmail && password === adminPassword) {
      alert("Welcome, Admin!");
      localStorage.setItem("token", "admin-token"); 
      localStorage.setItem("role", "admin");
      navigate("/dashboard-admin");
      return;
    }

    //  API login for normal users
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      alert(response.data.message);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      if (response.data.role === "admin") {
        navigate("/dashboard-admin");
      } else {
        navigate("/dashboard-user");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
