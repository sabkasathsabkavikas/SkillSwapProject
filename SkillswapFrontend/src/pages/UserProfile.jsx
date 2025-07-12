import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
  const { name } = useParams();
  const nav = useNavigate();
  const [u, setU] = useState(null);
  const me = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem("allProfiles")) || [];
    setU(p.find((x) => x.name === name));
  }, [name]);

  const request = () => {
    if (!me) {
      alert("Login first!");
      nav("/login");
      return;
    }
    const all = JSON.parse(localStorage.getItem("swapRequests")) || [];
    all.push({
      id: Date.now(),
      sender: me.name,
      receiver: u.name,
      skillRequested: u.skillsOffered,
      status: "pending",
    });
    localStorage.setItem("swapRequests", JSON.stringify(all));
    alert("✅ Request sent");
  };

  if (!u)
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="container card">
      <h2>{u.name}'s Profile</h2>
      <img src={u.avatar} className="avatar" alt={u.name} />
      <p>
        <strong>Location:</strong> {u.location}
      </p>
      <p>
        <strong>Offered:</strong> {u.skillsOffered}
      </p>
      <p>
        <strong>Wanted:</strong> {u.skillsWanted}
      </p>
      <p>
        <strong>Availability:</strong> {u.availability}
      </p>
      {!me ? (
        <button className="button" disabled>
          🔒 Login to request
        </button>
      ) : me.name === u.name ? (
        <p>This is your profile</p>
      ) : (
        <button className="button" onClick={request}>
          📩 Request Skill Swap
        </button>
      )}
    </div>
  );
}

export default UserProfile;
