import { Item } from "../Item/Item";
import s from "./List.module.scss";

export const List = () => {
  return (
    <>
      <ul className={s.list}>
        <Item textItem="Добавление задачи" />
        <Item textItem="Удаление задачи" />
        <Item textItem="Редактирование задачи" />
      </ul>
    </>
  );
};
