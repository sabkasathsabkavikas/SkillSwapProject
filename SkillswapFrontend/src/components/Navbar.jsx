import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userProfile");
    setUser(null);
    setOpen(false);
    alert("Logged out!");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-title">
        🔁 Skill Swap
      </Link>
      <div className="nav-links">
        <Link to="/search">Search</Link>
        {user ? (
          <div className="dropdown">
            <button className="button" onClick={() => setOpen((o) => !o)}>
              {user.name} ⬇️
            </button>
            {open && (
              <div className="dropdown-menu">
                <Link to="/profile" onClick={() => setOpen(false)}>
                  👤 Profile
                </Link>
                <Link to="/swaps" onClick={() => setOpen(false)}>
                  🔁 Swaps
                </Link>
                {user.isAdmin && (
                  <Link to="/admin" onClick={() => setOpen(false)}>
                    🛡️ Admin
                  </Link>
                )}
                <button onClick={logout}>🚪 Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
