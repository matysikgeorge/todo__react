import s from "./Form.module.scss";

export const Form = ({ children, getTask }) => {
  return (
    <form className={s.form} onSubmit={getTask}>
      {children}
    </form>
  );
};
