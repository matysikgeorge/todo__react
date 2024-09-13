import "../app/App";
import "./styles/global.css";
import { Main } from "../layouts/Main/Main";
import { useState, useEffect } from "react";

function App() {
  // const todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];
  const [addTask, setAddTask] = useState([]);
  const [inputText, setInputText] = useState([]);

  function getTask(event) {
    // - переименовать в addTask
    event.preventDefault();

    setAddTask([    // - c помощью spread оператора открываем масиив и записываем туда ноые знвчения
      ...addTask,
      { task: inputText, isDone: false, id: Date.now() },
    ]);
    console.log(addTask);
  }

  function changeInputHandler(event) {
    // - Handler, все, что печатается рукой
    setInputText(event.target.value.trim());
  }

  return (
    <>
      <Main getTask={getTask} changeInputHandler={changeInputHandler} />
    </>
  );
}

export default App;
