import React from "react";
import styled from "styled-components";
const ToDo = styled.p`
  text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};
`;

const ToDoCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  padding: 1rem 2rem;
  background-color: var(--main-bg-color);
  border: 0.15rem solid var(--main-bg-color);
  color: var(--main-font-color);
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  &:hover {
    background-color: var(--main-font-color);
    color: var(--main-bg-color);
  }

  > p {
    margin-left: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
const Button = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  color: var(--main-bg-color);
  background-color: var(--main-font-color);
  font-weight: bold;
  font-size: 1.6rem;
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;
`;
const ButtonGroup = styled.div`
  display: flex;

  button:first-child {
    &:hover {
      background-color: var(--todo-complete-btn-color-hover);
    }
  }

  button:nth-child(2) {
    &:hover {
      background-color: var(--todo-update-btn-color-hover);
    }
  }

  button:last-child {
    &:hover {
      background-color: var(--todo-delete-btn-color-hover);
    }
  }
`;
function ToDoCard({ toDo, handlerOnClickDel, handlerOnClickComplete }) {
  return (
    <ToDoCardDiv key={toDo.id}>
      <ToDo $complete={toDo.complete}>{toDo.toDo}</ToDo>
      <ButtonGroup>
        <Button data-id={toDo.id.toString()} onClick={handlerOnClickComplete}>
          완료
        </Button>
        <Button data-id={toDo.id.toString()}>수정</Button>
        <Button data-id={toDo.id.toString()} onClick={handlerOnClickDel}>
          삭제
        </Button>
      </ButtonGroup>
    </ToDoCardDiv>
  );
}

export default ToDoCard;
