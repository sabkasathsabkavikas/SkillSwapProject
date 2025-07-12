import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const me = JSON.parse(localStorage.getItem("loggedInUser"));
  const [profs, setProfs] = useState([]);
  const [reqs, setReqs] = useState([]);

  useEffect(() => {
    setProfs(JSON.parse(localStorage.getItem("allProfiles")) || []);
    setReqs(JSON.parse(localStorage.getItem("swapRequests")) || []);
  }, []);

  if (!me?.isAdmin) {
    return (
      <div className="container">
        <h3>🔒 Access denied</h3>
      </div>
    );
  }

  const ban = (n) => {
    const p = profs.filter((x) => x.name !== n);
    const q = reqs.filter((r) => r.sender !== n && r.receiver !== n);
    setProfs(p);
    setReqs(q);
    localStorage.setItem("allProfiles", JSON.stringify(p));
    localStorage.setItem("swapRequests", JSON.stringify(q));
    alert(`Banned ${n}`);
  };
  const clear = (n) => {
    const p = profs.map((x) =>
      x.name === n
        ? { ...x, skillsOffered: "[Removed]", skillsWanted: "[Removed]" }
        : x
    );
    setProfs(p);
    localStorage.setItem("allProfiles", JSON.stringify(p));
    alert(`Cleared skills for ${n}`);
  };

  return (
    <div className="container">
      <h2>🛡️ Admin Dashboard</h2>
      <h3>👥 Users</h3>
      {profs.map((u) => (
        <div key={u.name} className="card">
          <h4>{u.name}</h4>
          <p>
            <strong>Offered:</strong> {u.skillsOffered}
          </p>
          <p>
            <strong>Wanted:</strong> {u.skillsWanted}
          </p>
          <p>
            <strong>Loc:</strong> {u.location}
          </p>
          <p>
            <strong>Avail:</strong> {u.availability}
          </p>
          <button className="button" onClick={() => ban(u.name)}>
            🚫 Ban
          </button>
          <button className="button" onClick={() => clear(u.name)}>
            🧹 Clear Skills
          </button>
        </div>
      ))}

      <h3>📄 Requests</h3>
      {reqs.map((r) => (
        <div key={r.id} className="card">
          <p>
            From <strong>{r.sender}</strong> to <strong>{r.receiver}</strong>
          </p>
          <p>Skill: {r.skillRequested}</p>
          <p>Status: {r.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
