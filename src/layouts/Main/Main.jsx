import { Todo } from "../Todo/Todo";
import s from "./Main.module.scss";

export const Main = ({getTask, changeInputHandler, addTask, deleteAll, check, deleteItem}) => {
  return (
    <main>
      <Todo deleteItem={deleteItem} check={check} deleteAll={deleteAll} addTask={addTask} getTask={getTask} changeInputHandler={changeInputHandler}/>
    </main>
  );
};
