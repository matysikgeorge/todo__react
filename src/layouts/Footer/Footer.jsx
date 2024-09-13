import s from "./Footer.module.scss";
import { Button } from "../../ui/Button/Button";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <Button colorBtn="grey">Удалить завершенные</Button>
      <Button colorBtn="red">Удалить все</Button>
    </div>
  );
};
