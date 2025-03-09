import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <p className={css.text}>
        <BsPersonFill className={css.icon} />
        {name}
      </p>
      <p className={css.text}>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>
      <button className={css.button} onClick={() => onDelete}>
        Delete
      </button>
    </>
  );
}
