import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentList from "../presentational/Comment/CommentList";

export default function CommentsContainer({ id }) {
  const comments = useSelector(state => state.comments[id]);

  return <CommentList comments={comments} />;
}
