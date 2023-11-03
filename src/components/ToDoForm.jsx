import React, { useRef, useState } from "react";
import styled from "styled-components";
import { validData } from "../lib/util.js";
import { useDispatch } from "react-redux";
import { toDoAdded } from "../reducer/toDoReducer";

export default function ToDoForm({ title, toDo, toDoList, constToDo }) {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const toDoRef = useRef(null);
  const [titleError, setTitleError] = useState(false);
  const [toDoError, setToDoError] = useState(false);

  const handleOnChangeTitle = (event) => {
    title.setTitleValue(event.target.value);
    setTitleError(false);
  };

  const handleOnChangeToDo = (event) => {
    toDo.setToDoValue(event.target.value);
    setToDoError(false);
  };

  const onSubmitToDo = (event) => {
    event.preventDefault();
    if (
      validData(title.titleValue, "제목", titleRef, setTitleError) ||
      validData(toDo.toDoValue, "할 일", toDoRef, setToDoError)
    ) {
      return;
    }

    const newToDo = {
      title: title.titleValue,
      content: toDo.toDoValue,
      isDone: false,
      id: Date.now(),
    };

    dispatch(toDoAdded(newToDo));
    resetInput(title.setTitleValue, toDo.setToDoValue);
  };

  const resetInput = (...setValue) => {
    setValue.forEach((value) => value(""));
  };

  return (
    <Form onSubmit={onSubmitToDo}>
      <InputWrapper isEmpty={titleError}>
        <span>제목</span>
        <Input
          inputValue={title.titleValue}
          handle={handleOnChangeTitle}
          refData={titleRef}
        />
      </InputWrapper>
      <InputWrapper isEmpty={toDoError}>
        <span>할 일</span>
        <Input
          inputValue={toDo.toDoValue}
          handle={handleOnChangeToDo}
          refData={toDoRef}
        />
      </InputWrapper>
      <InputWrapper>
        <ToDoAddBtn>등록</ToDoAddBtn>
      </InputWrapper>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;

  > span {
    font-size: inherit;
    font-weight: bold;
    margin-right: 1rem;
  }

  > input {
    font-size: inherit;
    width: 20rem;
    padding: 1rem;
    border-radius: var(--border-radius);
    border: 0.1rem solid rgba(0, 0, 0, 0.5);
    color: var(--main-font-color);
    transition: border-color 0.2s ease-in;

    &:focus {
      border-color: ${(props) =>
        props.isEmpty ? "var(--border-error)" : "var(--main-font-color)"};
    }
  }
  &:nth-child(2) {
    > input {
      width: 30rem;
    }
  }
`;

const ToDoAddBtn = styled.button`
  height: 100%;
  font-size: inherit;
  font-weight: bold;
  padding: 0 2rem;
  color: var(--main-font-color);
  border-radius: var(--border-radius);
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  background-color: var(--main-bg-color);
  transition:
    border-color 0.2s ease-in,
    color 0.2s ease-in;

  &:hover {
    background-color: var(--main-font-color);
    color: var(--main-bg-color);
  }
`;

const Input = ({ inputValue, handle, refData }) => {
  return (
    <input type="text" value={inputValue} onChange={handle} ref={refData} />
  );
};
