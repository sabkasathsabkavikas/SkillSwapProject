import React, { useState } from "react";
import SwapRequestCard from "../components/SwapRequestCard";
import FeedbackForm from "../components/FeedbackForm";

const mockSwaps = [
  {
    id: 1,
    from: "Alice",
    to: "You",
    skill: "Photoshop",
    status: "accepted",
    feedbackGiven: false,
  },
  {
    id: 2,
    from: "Bob",
    to: "You",
    skill: "Excel",
    status: "rejected",
    feedbackGiven: false,
  },
];

function Swaps() {
  const [swaps, setSwaps] = useState(mockSwaps);

  const handleAction = (id, action) => {
    const updatedSwaps = swaps
      .map((swap) => {
        if (swap.id === id) {
          if (action === "delete") return null;
          return { ...swap, status: action };
        }
        return swap;
      })
      .filter(Boolean);
    setSwaps(updatedSwaps);
  };

  const handleFeedbackSubmit = (id, feedback) => {
    console.log(`Feedback for swap ${id}:`, feedback);
    alert("Feedback submitted!");
    setSwaps(
      swaps.map((swap) =>
        swap.id === id ? { ...swap, feedbackGiven: true } : swap
      )
    );
  };

  return (
    <div className="container">
      <h2>Your Swap Requests</h2>
      {swaps.length === 0 ? (
        <p>No swap requests.</p>
      ) : (
        swaps.map((swap) => (
          <div key={swap.id} style={{ marginBottom: "2rem" }}>
            <SwapRequestCard swap={swap} onAction={handleAction} />
            {swap.status === "accepted" && !swap.feedbackGiven && (
              <FeedbackForm
                onSubmit={(feedback) => handleFeedbackSubmit(swap.id, feedback)}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Swaps;
