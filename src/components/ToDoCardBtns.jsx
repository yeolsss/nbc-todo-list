import React from "react";
import styled from "styled-components";

export default function ToDoCardBtns({
  toDo,
  handleDeleteToDo,
  handleDoneToDo,
}) {
  const { id, isDone } = toDo;
  return (
    <ButtonSection data-id={id}>
      <Buttons isDone={isDone} handler={handleDeleteToDo} text={"삭제"} />
      <Buttons
        isDone={isDone}
        handler={handleDoneToDo}
        text={!isDone ? "완료" : "취소"}
      />
    </ButtonSection>
  );
}

const ButtonSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  color: inherit;
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: var(--border-radius);
  transition: background-color 0.2s ease-in;

  &:first-child {
    margin-right: 1rem;
  }

  &:first-child:hover {
    background-color: var(--todo-delete-btn-color-hover);
  }

  &:last-child:hover {
    background-color: ${(props) =>
      props.isDone
        ? "var(--todo-delete-btn-color-hover)"
        : "var(--todo-complete-btn-color-hover)"};
  }
`;

function Buttons({ isDone, handler, text }) {
  return (
    <Button isDone={isDone} onClick={handler}>
      {text}
    </Button>
  );
}
