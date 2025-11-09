import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }


    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.find((u) => u.username === username)) {
      alert("User already exists!");
      return;
    }

    const newUser = { username, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Signup successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
