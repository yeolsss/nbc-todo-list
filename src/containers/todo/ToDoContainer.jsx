import React, { useState } from "react";
import ToDoForm from "../../components/ToDoForm";
import styled from "styled-components";
import ToDoCard from "../../components/ToDoCard";
import { useSelector } from "react-redux";
import { selectToDos } from "../../reducer/toDoReducer";

function ToDoContainer() {
  const toDoList = useSelector(selectToDos);

  const TO_DO_LIST_KEY = "toDoList";
  const [titleValue, setTitleValue] = useState("");
  const [toDoValue, setToDoValue] = useState("");
  const [workingToDo, doneToDo] = toDoList.reduce(
    (acc, cus) => {
      acc[!cus.isDone ? 0 : 1].push(cus);
      return acc;
    },
    [[], []],
  );

  return (
    <>
      <ToDoForm
        title={{ titleValue: titleValue, setTitleValue: setTitleValue }}
        toDo={{ toDoValue: toDoValue, setToDoValue: setToDoValue }}
      />
      <ToDoListSection>
        {workingToDo.length === 0 ? (
          <NonToDo>할 일이 없어요!</NonToDo>
        ) : (
          <>
            <h1>🔥Todo!🔥</h1>
            <ul>
              {workingToDo.map((toDo) => (
                <ToDoCard>{toDo}</ToDoCard>
              ))}
            </ul>
          </>
        )}
      </ToDoListSection>
      {doneToDo.length !== 0 ? (
        <ToDoListSection>
          <h1>🎉Done!🎉</h1>
          <ul>
            {doneToDo.map((toDo) => (
              <ToDoCard>{toDo}</ToDoCard>
            ))}
          </ul>
        </ToDoListSection>
      ) : null}
    </>
  );
}

const ToDoListSection = styled.section`
  margin-top: 5rem;

  > h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  > ul {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 25rem);
    justify-content: space-between;
    font-size: 1.6rem;
    row-gap: 5rem;
    > li {
      position: relative;
      font-size: 2.4rem;
      display: flex;
      flex-direction: column;
      height: 30rem;
      border-radius: var(--border-radius);
      border: 0.1rem solid rgba(0, 0, 0, 0.5);
      padding: 2rem;
      box-sizing: border-box;
      transition:
        background-color 0.2s ease-in,
        color 0.2s ease-in;
      &:hover {
        background-color: var(--main-font-color);
        color: var(--main-bg-color);
      }

      > span {
        font-size: inherit;
        font-weight: bold;
      }

      > p {
        font-size: 1.6rem;
        margin-top: 2rem;
        overflow: scroll;
        max-height: 18rem;
        word-break: break-word;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

const NonToDo = styled.p`
  margin: 20rem auto;
  font-size: 5rem;
  text-align: center;
  font-weight: bold;
`;

export default ToDoContainer;
