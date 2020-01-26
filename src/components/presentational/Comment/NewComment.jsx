import React, { useState } from "react";
import styled from "@emotion/styled";
import { Card } from "../Card/Card";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NewComment({ submitComment, open, setOpen }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  if (open) {
    return (
      <Backdrop>
        <Card style={{ backgroundColor: "white", padding: 10 }}>
          <h3>Add a new comment</h3>
          <label htmlFor="name">Your name:</label> <br />
          <input
            type="text"
            value={name}
            name="name"
            onChange={e => setName(e.target.value)}
          />
          <br />
          <label htmlFor="text">Comment:</label>
          <br />
          <textarea
            value={text}
            name="text"
            onChange={e => setText(e.target.value)}
          />
          <br />
          <button onClick={() => submitComment({ name, text })}>Send</button>
          <button onClick={() => setOpen(false)}>Cancel</button>
        </Card>
      </Backdrop>
    );
  } else {
    return <></>;
  }
}
