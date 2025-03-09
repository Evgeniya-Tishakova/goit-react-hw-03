import css from "./Contact.module.css";
import { HiUser } from "react-icons/hi";


export default function Contact({ name, number, onDelete }) {
  return (
    <>
      <p<HiUser className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
