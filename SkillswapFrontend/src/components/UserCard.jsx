function UserCard({ user }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>{user.name}</h3>
      <p>
        <strong>Skills:</strong> {user.skills.join(", ")}
      </p>
      <button>Request Swap</button>
    </div>
  );
}

export default UserCard;
