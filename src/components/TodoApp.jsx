import React, { useEffect, useRef, useState } from "react";
import icons8ToDoList100 from "../assets/icons8-to-do-list-100.png";
import TodoItem from "./TodoItem";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo; // Ensure to return the unchanged todo
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className="bg-white place-self-center rounded-b-lg shadow-lg w-11/12 max-w-md 
     flex flex-col p-7 min-h-[550px] rounded-xl"
    >
      {/* Header */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-18" src={icons8ToDoList100} alt="" />
        <h1 className="text-3xl font-semibold">Keep It note</h1>
      </div>

      {/* Input & Button */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full p-2">
        <input
          ref={inputRef}
          className="w-full p-3 pl-4 rounded-full bg-gray-200 placeholder-gray-500 border focus:outline-none"
          type="text"
          placeholder="Add Your Task Here"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 hover:bg-orange-500 w-20 h-10 m-2 text-white text-lg font-medium cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Move Todo List Below */}
      <div className="flex flex-col items-start gap-2">
        {todoList.map((item, index) => {
          if (!item || !item.text) return null; // Skip undefined items
          return (
            <TodoItem
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoApp;