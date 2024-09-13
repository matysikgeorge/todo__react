import "../app/App";
import "./styles/global.css";
import { Main } from "../layouts/Main/Main";
import { useState, useEffect } from "react";

function App() {
  const [addTask, setAddTask] = useState(
    JSON.parse(localStorage.getItem("todo")) ?? []
  );

  const [inputText, setInputText] = useState("");

  function getTask(event) {
    // - переименовать в addTask
    event.preventDefault();
    // console.log(addTask);
    setAddTask([
      // - c помощью spread оператора открываем массив и записываем туда новые значения
      ...addTask,
      { task: inputText, isDone: false, id: Date.now() },
    ]);
  }

  function changeInputHandler(event) {
    // - Handler, все, что печатается рукой
    setInputText(event.target.value.trim());
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(addTask));
  }, [addTask]);

  function deleteAll() {
    setAddTask([]);
  }

  function check(id) {
    const update = addTask.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      }
      return el;
    });
    setAddTask(update);
  }

  function deleteItem() {
    console.log("deleteItem");
    // addTask.filter((el) => el.id !== id);
  }

  return (
    <>
      <Main
        deleteItem={deleteItem}
        check={check}
        deleteAll={deleteAll}
        addTask={addTask}
        getTask={getTask}
        changeInputHandler={changeInputHandler}
      />
    </>
  );
}

export default App;
