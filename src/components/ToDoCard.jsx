import React, { useEffect, useState } from "react";
import styled from "styled-components";
const ToDo = styled.p`
  text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};
  display: flex;
  align-content: center;
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

const UpdateToDoDiv = styled.div`
  display: flex;
  align-items: center;
`;
const UpdateToDoInput = styled.input`
  font-size: 1.6rem;
  width: 40rem;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
`;
const UpdateToDoButton = styled.button`
  padding: 1.5rem 2rem;
  border: 0.1rem solid;
  margin-left: 0.5rem;
  background-color: var(--main-bg-color);
  color: var(--main-font-color);
  border-radius: 0.5rem;
  transition:
    background-color 0.2s ease-in,
    color 0.2s ease-in;

  &:hover {
    background-color: var(--todo-update-btn-color-hover);
    color: var(--main-bg-color);
  }
`;
function ToDoCard({
  toDo,
  toDoList,
  handlerOnClickDel,
  handlerOnClickComplete,
}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateToDo, setUpdateToDo] = useState("");

  const handlerToggleUpdate = () => {
    setUpdateToDo(toDo.toDo);
    setIsUpdate(!isUpdate);
  };
  const handlerOnClickUpdate = (event) => {
    const currentToDoList = [...toDoList.toDoList];

    const currentToDo = currentToDoList.find(
      ({ id }) => String(id) === event.target.dataset.id,
    );
    currentToDo.toDo = updateToDo;

    localStorage.setItem("todoList", JSON.stringify(currentToDoList));
    toDoList.setToDoList(currentToDoList);
    setIsUpdate(!isUpdate);
  };
  const handlerOnChangeToDo = (event) => {
    setUpdateToDo(event.target.value);
  };

  return (
    <ToDoCardDiv key={toDo.id}>
      {isUpdate ? (
        <UpdateToDoDiv>
          <UpdateToDoInput
            type="text"
            value={updateToDo}
            onChange={handlerOnChangeToDo}
          />
          <UpdateToDoButton
            data-id={toDo.id.toString()}
            onClick={handlerOnClickUpdate}
          >
            수정 완료
          </UpdateToDoButton>
        </UpdateToDoDiv>
      ) : (
        <ToDo $complete={toDo.complete}>{toDo.toDo}</ToDo>
      )}
      <ButtonGroup>
        <Button data-id={toDo.id.toString()} onClick={handlerOnClickComplete}>
          완료
        </Button>
        <Button data-id={toDo.id.toString()} onClick={handlerToggleUpdate}>
          수정
        </Button>
        <Button data-id={toDo.id.toString()} onClick={handlerOnClickDel}>
          삭제
        </Button>
      </ButtonGroup>
    </ToDoCardDiv>
  );
}

export default ToDoCard;
