import React, { useRef } from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete1 from "../assets/delete1.png";

const TodoItem = ({ text, id, isComplete, deleteTodo, toggle }) => {
  const inputref = useRef();

  const add = () => {};
  return (
    <div className="flex items-center justify-between w-full my-3 px-2">
      <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
        <img src={isComplete? tick: not_tick} alt="Tick" className="w-7 h-6" />
        <p className={`text-slate-700 ml-2 text[17px]  ${isComplete ? "line-through": ""}`}>{text}</p>
      </div>

      <div>
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          src={delete1}
          alt="delete"
          className="w-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoItem;
