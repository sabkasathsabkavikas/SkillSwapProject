import React, { useEffect, useState } from "react";

function Swaps() {
  const me = JSON.parse(localStorage.getItem("loggedInUser"));
  const [reqs, setReqs] = useState([]);

  useEffect(() => {
    setReqs(JSON.parse(localStorage.getItem("swapRequests")) || []);
  }, []);

  const act = (id, s) => {
    const upd = reqs.map((r) => (r.id === id ? { ...r, status: s } : r));
    setReqs(upd);
    localStorage.setItem("swapRequests", JSON.stringify(upd));
  };

  const cancel = (id) => {
    const f = reqs.filter((r) => r.id !== id);
    setReqs(f);
    localStorage.setItem("swapRequests", JSON.stringify(f));
  };

  const inc = reqs.filter((r) => r.receiver === me.name);
  const out = reqs.filter((r) => r.sender === me.name);

  return (
    <div className="container">
      <h2>🔁 Swap Requests</h2>

      <h3>Incoming</h3>
      {inc.length === 0 ? (
        <p>No incoming.</p>
      ) : (
        inc.map((r) => (
          <div key={r.id} className="card">
            <p>
              <strong>{r.sender}</strong> wants your{" "}
              <em>"{r.skillRequested}"</em>
            </p>
            <p>
              <strong>Status:</strong> {r.status}
            </p>
            {r.status === "pending" && (
              <>
                <button
                  className="button"
                  onClick={() => act(r.id, "accepted")}
                >
                  ✅ Accept
                </button>
                <button
                  className="button"
                  onClick={() => act(r.id, "rejected")}
                >
                  ❌ Reject
                </button>
              </>
            )}
          </div>
        ))
      )}

      <h3>Outgoing</h3>
      {out.length === 0 ? (
        <p>No outgoing.</p>
      ) : (
        out.map((r) => (
          <div key={r.id} className="card">
            <p>
              You requested <strong>{r.receiver}</strong> for "
              {r.skillRequested}"
            </p>
            <p>
              <strong>Status:</strong> {r.status}
            </p>
            {r.status === "pending" && (
              <button className="button" onClick={() => cancel(r.id)}>
                ❌ Cancel
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Swaps;
