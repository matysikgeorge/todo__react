import { Form } from "../../ui/Form/Form";
import { Input } from "../../ui/Input/Input";
import { Button } from "../../ui/Button/Button";
import { List } from "../../components/List/List";
import s from "./Wrapper.module.scss";

export const Wrapper = ({getTask, changeInputHandler, addTask, check, deleteItem }) => {
  return (
    <>
      <div className={s.wrapper}>
        <Form getTask={getTask}>
          <Input changeInputHandler={changeInputHandler}/>
          <Button>Добавить</Button>
        </Form>
        <List deleteItem={deleteItem} check={check} addTask={addTask} getTask={getTask}/>
      </div>
    </>
  );
};
