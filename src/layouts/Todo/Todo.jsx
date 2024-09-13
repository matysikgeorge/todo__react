import { Container } from "../Container";
import { Footer } from "../Footer/Footer";
import { Wrapper } from "../Wrapper/Wrapper";
import {Header} from "../Header/Header"
import s from "./Todo.module.scss";

export const Todo = ({getTask, changeInputHandler}) => {
  return (
    <>
      <section className={s.todo}>
        <Container>
          <Header/>
          <div className={s.wrapper}>
          <Wrapper getTask={getTask} changeInputHandler={changeInputHandler} />
          <Footer/>
          </div>
        </Container>
      </section>
    </>
  );
};
