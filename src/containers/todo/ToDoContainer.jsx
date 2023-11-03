import React, { useEffect, useState } from "react";
import useStorage from "nbc-use-storage";
import ToDoForm from "../../components/ToDoForm";
import styled from "styled-components";
import ToDoCard from "../../components/ToDoCard";

function ToDoContainer() {
  const TO_DO_LIST_KEY = "toDoList";
  const [titleValue, setTitleValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [toDoValue, setToDoValue] = useState("");
  const [getStorage, setStorage] = useStorage();
  const [workingToDo, doneToDo] = toDoList.reduce(
    (acc, cus) => {
      acc[!cus.isDone ? 0 : 1].push(cus);
      return acc;
    },
    [[], []],
  );

  useEffect(() => {
    setToDoList(getStorage(TO_DO_LIST_KEY) || []);
  }, []);

  const handleDeleteToDo = (id) => {
    const newToDoList = toDoList.filter(
      (toDo) => toDo.id.toString() !== id.target.parentNode.dataset.id,
    );
    setStorage(newToDoList, TO_DO_LIST_KEY);
    setToDoList(newToDoList);
  };

  const handleDoneToDo = (id) => {
    const newToDoList = toDoList.map((toDo) => {
      if (toDo.id.toString() === id.target.parentNode.dataset.id) {
        return {
          ...toDo,
          isDone: !toDo.isDone,
        };
      }
      return { ...toDo };
    });
    setStorage(newToDoList, TO_DO_LIST_KEY);
    setToDoList(newToDoList);
  };

  return (
    <>
      <ToDoForm
        title={{ titleValue: titleValue, setTitleValue: setTitleValue }}
        toDo={{ toDoValue: toDoValue, setToDoValue: setToDoValue }}
        toDoList={setToDoList}
        constToDo={TO_DO_LIST_KEY}
      />
      <ToDoListSection>
        {workingToDo.length === 0 ? (
          <p>할 일이 없어요!</p>
        ) : (
          <>
            <h1>🔥할 일!🔥</h1>
            <ul>
              {workingToDo.map((toDo) => (
                <ToDoCard
                  handleDeleteToDo={handleDeleteToDo}
                  handleDoneToDo={handleDoneToDo}
                >
                  {toDo}
                </ToDoCard>
              ))}
            </ul>
          </>
        )}
      </ToDoListSection>
      {doneToDo.length !== 0 ? (
        <ToDoListSection>
          <h1>🎉완료!🎉</h1>
          <ul>
            {doneToDo.map((toDo) => (
              <ToDoCard
                handleDeleteToDo={handleDeleteToDo}
                handleDoneToDo={handleDoneToDo}
              >
                {toDo}
              </ToDoCard>
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
      }
    }
  }
`;

export default ToDoContainer;