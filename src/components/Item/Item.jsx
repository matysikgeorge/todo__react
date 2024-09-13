import s from "./Item.module.scss";

export const Item = ({ textItem }) => {
  return (
    <li className={s.item}>
      <input className={s.item__checkbox} type="checkbox" />
      <p className={s.item__text}>{textItem}</p>
      <button className={s.item__button}>❌</button>
    </li>
  );
};
