import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToDoCard from "./components/ToDoCard";

const Container = styled.div`
  margin: 2rem auto 0;
  width: 100rem;
  max-width: 144rem;
  padding: 2rem;
  box-sizing: border-box;
`;
const Header = styled.header`
  > h1 {
    font-size: 10rem;
    font-weight: bold;
    text-align: center;
  }
`;
const InputGroup = styled.section`
  margin: 3rem 0;

  display: flex;
  justify-content: center;

  > input {
    font-size: 1.6rem;
    border: 0.1rem solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    transition: border-color 0.2s ease-in;

    &:focus {
      border-color: var(--main-bg-color);
    }
  }

  > button {
    padding: 0.5rem 2rem;
    border: 0.1rem solid;
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    border-radius: 0.5rem;
    transition:
      background-color 0.2s ease-in,
      color 0.2s ease-in;

    &:hover {
      background-color: var(--main-font-color);
      color: var(--main-bg-color);
    }
  }
`;

const NoneToDo = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem;
`;

const ToDoList = styled.section`
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setToDoList(JSON.parse(localStorage.getItem("todoList")) || []);
  }, []);

  const handlerOnClickToDo = () => {
    if (toDo.replaceAll(" ", "") === "") {
      alert("할 일을 입력해주세요.");
      return;
    }

    const toDoObj = {
      id: Date.now(),
      toDo,
      complete: false,
    };

    const currentToDoList = [...toDoList, toDoObj];

    localStorage.setItem("todoList", JSON.stringify(currentToDoList));
    setToDoList(currentToDoList);
    setToDo("");
  };

  const handlerOnChange = ({ target: { value } }) => {
    setToDo(value);
  };

  const handlerOnClickComplete = (event) => {
    const currentToDoList = [...toDoList];

    const currentToDo = currentToDoList.find(
      ({ id }) => String(id) === event.target.dataset.id,
    );
    currentToDo.complete = !currentToDo.complete;

    localStorage.setItem("todoList", JSON.stringify(currentToDoList));
    setToDoList(currentToDoList);
  };

  const handlerOnClickDel = (event) => {
    const currentToDoList = [...toDoList];
    const currentToDo = currentToDoList.filter(
      ({ id }) => String(id) !== event.target.dataset.id,
    );

    localStorage.setItem("todoList", JSON.stringify(currentToDo));
    setToDoList(currentToDo);
  };

  return (
    <Container>
      <Header>
        <h1>ToDo</h1>
      </Header>
      <InputGroup>
        <input
          type="text"
          onChange={handlerOnChange}
          value={toDo}
          placeholder={`할 일을 입력해주세요.`}
        />
        <button onClick={handlerOnClickToDo}>입력</button>
      </InputGroup>
      <ToDoList>
        {toDoList.length === 0 ? (
          <ToDoList key={0}>
            <NoneToDo>데이터가 없습니다.</NoneToDo>
          </ToDoList>
        ) : (
          toDoList.map((toDoItem) => (
            <ToDoCard
              key={toDo.id}
              toDo={toDoItem}
              toDoList={{ toDoList, setToDoList }}
              handlerOnClickDel={handlerOnClickDel}
              handlerOnClickComplete={handlerOnClickComplete}
            />
          ))
        )}
      </ToDoList>
    </Container>
  );
}

export default App;
