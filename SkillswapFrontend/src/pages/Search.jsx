import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loc, setLoc] = useState("");
  const [avail, setAvail] = useState("");
  const [page, setPage] = useState(1);
  const per = 4;
  const nav = useNavigate();
  const me = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("allProfiles")) || [];
    setUsers(saved);
  }, []);

  const filtered = users.filter(
    (u) =>
      u.skillsOffered.toLowerCase().includes(search.toLowerCase()) &&
      (loc === "" || u.location === loc) &&
      (avail === "" || u.availability === avail)
  );

  const total = Math.ceil(filtered.length / per);
  const current = filtered.slice((page - 1) * per, page * per);

  return (
    <div className="container">
      <h2>🔍 Browse Public Profiles</h2>
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <input
          className="input"
          placeholder="Search skill..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <select
          className="input"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
        >
          <option value="">All Locations</option>
          {[...new Set(users.map((u) => u.location))].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <select
          className="input"
          value={avail}
          onChange={(e) => setAvail(e.target.value)}
        >
          <option value="">All Availability</option>
          {[...new Set(users.map((u) => u.availability))].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="user-grid">
        {current.length === 0 && <p>No users match.</p>}
        {current.map((u) => (
          <div
            className="card"
            key={u.name}
            onClick={() => nav(`/user/${u.name}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={u.avatar} alt={u.name} className="avatar" />
            <h4>{u.name}</h4>
            <p>
              <strong>Offered:</strong> {u.skillsOffered}
            </p>
            <p>
              <strong>Wanted:</strong> {u.skillsWanted}
            </p>
            <p>
              <strong>Avail:</strong> {u.availability}
            </p>
            <p>
              <strong>Loc:</strong> {u.location}
            </p>
            {me ? (
              <button
                className="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nav(`/user/${u.name}`);
                }}
              >
                View / Request
              </button>
            ) : (
              <button className="button" disabled>
                Login to Request
              </button>
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "1rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="button"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          ⬅️ Prev
        </button>
        <span style={{ margin: "0 1rem" }}>
          Page {page} of {total}
        </span>
        <button
          className="button"
          disabled={page === total}
          onClick={() => setPage((p) => p + 1)}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default Search;
