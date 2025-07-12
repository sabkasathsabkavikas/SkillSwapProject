import React, { useState } from "react";

function FeedbackForm({ onSubmit }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) return alert("Please select a rating");
    onSubmit({ rating, comment });
    setRating("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h4>Leave Feedback</h4>
      <label>
        Rating:
        <select
          className="input"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">-- Choose --</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </label>
      <br />
      <textarea
        className="textarea"
        placeholder="Write your feedback here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={3}
      />
      <br />
      <button className="button" type="submit">
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
