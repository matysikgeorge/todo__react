import { Container } from "../Container";
import { Footer } from "../Footer/Footer";
import { Wrapper } from "../Wrapper/Wrapper";
import {Header} from "../Header/Header"
import s from "./Todo.module.scss";

export const Todo = ({getTask, changeInputHandler, addTask, deleteAll, check, deleteItem}) => {
  return (
    <>
      <section className={s.todo}>
        <Container>
          <Header/>
          <div className={s.wrapper}>
          <Wrapper deleteItem={deleteItem} check={check} addTask={addTask} getTask={getTask} changeInputHandler={changeInputHandler} />
          <Footer deleteItem={deleteItem} deleteAll={deleteAll}/>
          </div>
        </Container>
      </section>
    </>
  );
};
