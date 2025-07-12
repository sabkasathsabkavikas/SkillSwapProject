import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem("loggedInUser", JSON.stringify(res.data));
      alert(`Welcome ${res.data.name}!`);
      nav('/');
      window.location.reload();
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>
      <form className="card" onSubmit={handleLogin}>
        <label>Email:</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
        <label>Password:</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
