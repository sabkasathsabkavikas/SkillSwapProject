import React, { useState } from "react";
import AdminUserTable from "../components/AdminUserTable";
import AdminSwapTable from "../components/AdminSwapTable";
import AlertBox from "../components/AlertBox";

function Admin() {
  const [message, setMessage] = useState("Welcome Admin!");

  const handleSendAlert = () => {
    setMessage("🚨 Feature Update: New feedback system launched!");
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <button onClick={handleSendAlert}>Send Platform Alert</button>
      <AlertBox message={message} />

      <h3>User Management</h3>
      <AdminUserTable />

      <h3>Swap Monitoring</h3>
      <AdminSwapTable />

      <h3>Reports</h3>
      <button onClick={() => alert("Downloading user activity...")}>
        📥 Download User Activity
      </button>
      <button onClick={() => alert("Downloading feedback log...")}>
        📥 Download Feedback Log
      </button>
      <button onClick={() => alert("Downloading swap stats...")}>
        📥 Download Swap Stats
      </button>
    </div>
  );
}

export default Admin;
