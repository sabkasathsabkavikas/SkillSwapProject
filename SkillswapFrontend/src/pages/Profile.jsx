import React, { useState, useEffect } from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [p, setP] = useState({
    name: user?.name || "",
    location: "",
    skillsOffered: "",
    skillsWanted: "",
    availability: "",
    isPublic: true,
    avatar: `https://i.pravatar.cc/150?u=${user?.email || "u"}`,
  });

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`profile_${user.email}`);
      if (saved) setP(JSON.parse(saved));
    }
  }, [user]);

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setP((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const save = (e) => {
    e.preventDefault();
    if (!user) return alert("Login first");
    localStorage.setItem(`profile_${user.email}`, JSON.stringify(p));
    localStorage.setItem("userProfile", JSON.stringify(p));
    const list = JSON.parse(localStorage.getItem("allProfiles")) || [];
    if (!list.find((u) => u.name === p.name)) list.push(p);
    localStorage.setItem("allProfiles", JSON.stringify(list));
    alert("Profile saved!");
  };

  return (
    <div className="container">
      <h2>🧑 Your Profile</h2>
      <form className="card" onSubmit={save}>
        <label>Name:</label>
        <input
          className="input"
          name="name"
          value={p.name}
          onChange={handle}
          required
        />
        <label>Location:</label>
        <input
          className="input"
          name="location"
          value={p.location}
          onChange={handle}
        />
        <label>Skills Offered:</label>
        <input
          className="input"
          name="skillsOffered"
          value={p.skillsOffered}
          onChange={handle}
          required
        />
        <label>Skills Wanted:</label>
        <input
          className="input"
          name="skillsWanted"
          value={p.skillsWanted}
          onChange={handle}
          required
        />
        <label>Availability:</label>
        <select
          className="input"
          name="availability"
          value={p.availability}
          onChange={handle}
        >
          <option value="">-- Select --</option>
          {["Weekdays", "Weekends", "Evenings", "Anytime"].map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            name="isPublic"
            checked={p.isPublic}
            onChange={handle}
          />{" "}
          Make profile public
        </label>
        <button className="button" type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
