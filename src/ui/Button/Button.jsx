import s from "./Button.module.scss";

export const Button = ({children, colorBtn}) => {
  return (
    <>
      <button className={`${s.button} ${s[colorBtn]}`} >{children}</button>
    </>
  );
};
