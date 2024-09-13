import { Todo } from "../Todo/Todo";
import s from "./Main.module.scss";

export const Main = ({getTask, changeInputHandler}) => {
  return (
    <main>
      <Todo getTask={getTask} changeInputHandler={changeInputHandler}/>
    </main>
  );
};
