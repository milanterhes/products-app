import React, { useState } from "react";
import NewComment from "./NewComment";
import { addComment } from "../../../actions/index";
import { useDispatch } from "react-redux";

export default function CommentList({ comments, id }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const submitComment = comment => {
    setOpen(false);
    dispatch(addComment({ ...comment, id }));
  };
  return (
    <div
      style={{
        width: "100%",
        padding: 10
      }}
    >
      <hr />
      <h2>Comments</h2>
      <button onClick={() => setOpen(true)}>Add new comment</button>
      <NewComment open={open} setOpen={setOpen} submitComment={submitComment} />
      {comments &&
        comments.map((comment, idx) => (
          <div
            key={idx}
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
