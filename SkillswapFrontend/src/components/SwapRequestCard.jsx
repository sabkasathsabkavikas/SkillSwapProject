function SwapRequestCard({ swap, onAction }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #aaa",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <h4>Swap from {swap.from}</h4>
      <p>Skill: {swap.skill}</p>
      <p>
        Status: <strong>{swap.status}</strong>
      </p>

      {swap.status === "pending" && (
        <>
          <button
            onClick={() => onAction(swap.id, "accepted")}
            style={{ marginRight: "0.5rem" }}
          >
            Accept
          </button>
          <button
            onClick={() => onAction(swap.id, "rejected")}
            style={{ marginRight: "0.5rem" }}
          >
            Reject
          </button>
        </>
      )}
      <button onClick={() => onAction(swap.id, "delete")}>Delete</button>
    </div>
  );
}

export default SwapRequestCard;
