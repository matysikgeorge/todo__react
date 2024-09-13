import s from "./Button.module.scss";

export const Button = ({children, colorBtn, onClick}) => {
 
  return (
    <>
      <button className={`${s.button} ${s[colorBtn]}`} onClick={onClick} >{children}</button>
    </>
  );
};
