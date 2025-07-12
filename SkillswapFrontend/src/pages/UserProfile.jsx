import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function UserProfile() {
  const { id } = useParams();
  const nav = useNavigate();
  const [u, setU] = useState(null);
  const me = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setU(res.data));
  }, [id]);

  const requestSwap = async () => {
    if (!me) { alert("Login first!"); nav("/login"); return; }
    await api.post('/swaps', { senderId: me.id, receiverId: u.id, skillRequested: u.skillsOffered });
    alert("✅ Request sent");
  };

  if (!u) return <div className="container">Loading...</div>;

  return (
    <div className="container card">
      <h2>{u.name}'s Profile</h2>
      <img src={u.avatar} className="avatar" alt="" />
      <p><strong>Location:</strong> {u.location}</p>
      <p><strong>Offered:</strong> {u.skillsOffered}</p>
      <p><strong>Wanted:</strong> {u.skillsWanted}</p>
      <p><strong>Availability:</strong> {u.availability}</p>

      {!me ?
        <button className="button" disabled>🔒 Login to Request</button> :
        me.id === u.id ?
          <p>This is your profile</p> :
          <button className="button" onClick={requestSwap}>📩 Request Skill Swap</button>
      }
    </div>
  );
}

export default UserProfile;
