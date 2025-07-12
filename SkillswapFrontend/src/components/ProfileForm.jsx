function ProfileForm({ profile, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        className="input"
        placeholder="Name"
        value={profile.name}
        onChange={onChange}
      />
      <input
        name="location"
        className="input"
        placeholder="Location"
        value={profile.location}
        onChange={onChange}
      />
      <input name="photo" className="input" type="file" onChange={onChange} />
      {profile.photo && (
        <img src={profile.photo} alt="Profile Preview" width="100" />
      )}
      <textarea
        name="skillsOffered"
        className="textarea"
        placeholder="Skills Offered"
        value={profile.skillsOffered}
        onChange={onChange}
      />
      <textarea
        name="skillsWanted"
        className="textarea"
        placeholder="Skills Wanted"
        value={profile.skillsWanted}
        onChange={onChange}
      />
      <select
        name="availability"
        className="input"
        value={profile.availability}
        onChange={onChange}
      >
        <option value="">Select Availability</option>
        <option value="weekends">Weekends</option>
        <option value="evenings">Evenings</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="isPublic"
          checked={profile.isPublic}
          onChange={onChange}
        />
        Make profile public
      </label>
      <br />
      <button className="button" type="submit">
        Save
      </button>
    </form>
  );
}

export default ProfileForm;
