import { Item } from "../Item/Item";
import s from "./List.module.scss";

export const List = ({addTask, check, deleteItem}) => {
  console.log(addTask);
  
  return (
    <>
      <ul className={s.list}>
      {addTask.map((todo)=> {
        return <Item  deleteItem={deleteItem} check={check} textItem={todo.task} isDone={todo.isDone}
        id={todo.id}/>
      })}
      
      </ul>
    </>
  );
};
