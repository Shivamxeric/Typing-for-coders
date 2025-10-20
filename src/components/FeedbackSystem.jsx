import React, { useState } from "react";

const cardTitles = [
  "Readability",
  "Performance",
  "Security",
  "Documentation",
  "Testing",
  "UI/UX",
];

const FeedbackSystem = () => {
  const [votes, setVotes] = useState(
    cardTitles.map(() => ({ up: 0, down: 0 }))
  );

  const handleUpvote = (index) => {
    const updated = [...votes];
    updated[index].up += 1;
    setVotes(updated);
  };

  const handleDownvote = (index) => {
    const updated = [...votes];
    updated[index].down += 1;
    setVotes(updated);
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {cardTitles.map((title, index) => (
          <div key={index} className="pa-10 w-300 card">
            <h2>{title}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                onClick={() => handleUpvote(index)}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                onClick={() => handleDownvote(index)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{votes[index].up}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{votes[index].down}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
