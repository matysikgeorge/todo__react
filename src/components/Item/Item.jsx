import s from "./Item.module.scss";

export const Item = ({ textItem, check, deleteItem, id}) => {
// function check(){
//   console.log("check");
  
// }

// function deleteItem(){
//   console.log("deleteItem");
  
// }
console.log(id);

  return (
    <li className={s.item}>
      <input onChange={() => check(id)} className={s.item__checkbox} type="checkbox" />
      <p className={s.item__text}>{textItem}</p>
      <button onClick={deleteItem} className={s.item__button}>❌</button>
    </li>
  );
};
