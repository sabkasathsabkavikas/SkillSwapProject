import React, { useState } from "react";
import UserCard from "../components/UserCard";

const mockUsers = [
  { id: 1, name: "Alice", skills: ["Photoshop", "Excel"] },
  { id: 2, name: "Bob", skills: ["React", "Node.js"] },
  { id: 3, name: "Charlie", skills: ["Public Speaking", "Python"] },
];

function Search() {
  const [query, setQuery] = useState("");

  const filteredUsers = mockUsers.filter((user) =>
    user.skills.some((skill) =>
      skill.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="container">
      <h2>Search Skills</h2>
      <input
        placeholder="Search by skill..."
        className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ marginTop: "1rem" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
