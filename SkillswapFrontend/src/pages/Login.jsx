import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dummyUsers = [
    {
      name: "admin",
      email: "admin@admin.com",
      password: "admin123",
      isAdmin: true,
    },
    {
      name: "john",
      email: "john@example.com",
      password: "1234",
      isAdmin: false,
    },
    {
      name: "soham",
      email: "soham@demo.com",
      password: "pass123",
      isAdmin: false,
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const match = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (match) {
      localStorage.setItem("loggedInUser", JSON.stringify(match));
      alert(`Welcome ${match.name}!`);
      navigate("/");
      window.location.reload();
    } else alert("Invalid credentials");
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>
      <form className="card" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
