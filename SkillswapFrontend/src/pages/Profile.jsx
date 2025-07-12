import React, { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    photo: "",
    skillsOffered: "",
    skillsWanted: "",
    availability: "",
    isPublic: false,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === "checkbox"
        ? checked
        : type === "file"
        ? URL.createObjectURL(files[0])
        : value;

    setProfile((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("✅ Profile saved to localStorage!");
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <ProfileForm
        profile={profile}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Profile;
