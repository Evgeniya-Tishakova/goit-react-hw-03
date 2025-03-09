import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";

export default function Contact({ name, number, onDelete }) {
  return (
    <>
      <p className={css.text}>
        <HiUser />
        {name}
      </p>
      <p className={css.text}>{number}</p>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
