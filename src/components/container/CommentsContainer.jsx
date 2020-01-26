import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../presentational/Comment/CommentList";

export default function CommentsContainer({ id }) {
  const comments = useSelector(state => state.comments);

  return <CommentList comments={comments[id]} id={id} />;
}
