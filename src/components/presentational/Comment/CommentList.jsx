import React from "react";

export default function CommentList({ comments }) {
  return (
    <div
      style={{
        width: "100%",
        padding: 10
      }}
    >
      <hr />
      <h2>Comments</h2>
      {comments.map(comment => (
        <div
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black"
          }}
        >
          <h3>{comment.name}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
