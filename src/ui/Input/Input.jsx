import s from "./Input.module.scss";

export const Input = ({changeInputHandler}) => {
  return (
    <>
      <input className={s.input} onChange={changeInputHandler} type="text" />
    </>
  );
};
