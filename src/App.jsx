import React from "react";
import "./App.css";
import ToDoApp from "./components/ToDoApp";
const App = () => {
  return (
    <div className="bg-stone-900 grid py-4  min-h-screen ">
      <ToDoApp />
    </div>
  );
};

export default App;
