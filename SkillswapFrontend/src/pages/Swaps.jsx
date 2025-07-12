import React, { useEffect, useState } from 'react';
import api from '../api';

function Swaps() {
  const me = JSON.parse(localStorage.getItem("loggedInUser"));
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);

  const load = async () => {
    const inc = await api.get(`/swaps/user/${me.id}`);
    const all = (await api.get('/swaps')).data;
    setIncoming(inc.data);
    setOutgoing(all.filter(r => r.senderId === me.id));
  };

  useEffect(() => { if(me) load(); }, [me]);

  const updateStatus = async (id, status) => {
    await api.put(`/swaps/${id}`, { status });
    load();
  };

  const cancel = async (id) => {
    await api.delete(`/swaps/${id}`);
    load();
  };

  return (
    <div className="container">
      <h2>🔁 Swap Requests</h2>

      <h3>Incoming</h3>
      {incoming.length===0 ? <p>No incoming.</p> : incoming.map(r=>(
        <div className="card" key={r.id}>
          <p><strong>{r.senderId}</strong> wants your <em>"{r.skillRequested}"</em></p>
          <p><strong>Status:</strong> {r.status}</p>
          {r.status==="pending" && (
            <>
              <button className="button" onClick={()=>updateStatus(r.id, "accepted")}>✅ Accept</button>
              <button className="button" onClick={()=>updateStatus(r.id, "rejected")}>❌ Reject</button>
            </>
          )}
        </div>
      ))}

      <h3>Outgoing</h3>
      {outgoing.length===0 ? <p>No outgoing.</p> : outgoing.map(r=>(
        <div className="card" key={r.id}>
          <p>To <strong>{r.receiverId}</strong> for "{r.skillRequested}"</p>
          <p><strong>Status:</strong> {r.status}</p>
          {r.status==="pending" && (
            <button className="button" onClick={()=>cancel(r.id)}>❌ Cancel</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Swaps;
