import React from "react";
import ToDoCardBtns from "./ToDoCardBtns";

function ToDoCard({ children: toDo }) {
  const { id, isDone, title, content } = toDo;
  return (
    <>
      <li key={id}>
        <span>제목: {title}</span>
        <p>{content}</p>
        <ToDoCardBtns toDo={{ id, isDone }} />
      </li>
    </>
  );
}

export default ToDoCard;
