import s from "./Footer.module.scss";
import { Button } from "../../ui/Button/Button";

export const Footer = ({deleteAll, deleteItem}) => {
  return (
    <div className={s.footer}>
      <Button  colorBtn="grey">Удалить завершенные</Button>
      <Button onClick={deleteAll} colorBtn="red">
        Удалить все
      </Button>
    </div>
  );
};
