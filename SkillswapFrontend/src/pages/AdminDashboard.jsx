import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const nav = useNavigate();
  const me = JSON.parse(localStorage.getItem("loggedInUser"));
  const [users, setUsers] = useState([]);
  const [swaps, setSwaps] = useState([]);

  useEffect(() => {
    if (!me?.isAdmin) { nav('/'); return; }
    api.get('/users/public').then(res => setUsers(res.data));
    api.get('/swaps').then(res => setSwaps(res.data));
  }, [me]);

  const ban = async id => {
    await api.delete(`/users/${id}`);
    setUsers(u => u.filter(x => x.id !== id));
  };

  const clearSkills = async id => {
    await api.put(`/users/${id}`, { skillsOffered: "[Removed]", skillsWanted: "[Removed]" });
    setUsers(u => u.map(x => x.id===id ? { ...x, skillsOffered: "[Removed]", skillsWanted: "[Removed]" } : x));
  };

  return (
    <div className="container">
      <h2>🛡️ Admin Dashboard</h2>

      <h3>👥 Users</h3>
      {users.map(u=>(
        <div className="card" key={u.id}>
          <h4>{u.name}</h4>
          <p><strong>Offered:</strong> {u.skillsOffered}</p>
          <button className="button" onClick={()=>ban(u.id)}>🚫 Ban</button>
          <button className="button" onClick={()=>clearSkills(u.id)}>🧹 Clear Skills</button>
        </div>
      ))}

      <h3>📄 Swap Requests</h3>
      {swaps.map(s=>(
        <div className="card" key={s.id}>
          <p>From <strong>{s.senderId}</strong> to <strong>{s.receiverId}</strong></p>
          <p>for <em>{s.skillRequested}</em> — {s.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
