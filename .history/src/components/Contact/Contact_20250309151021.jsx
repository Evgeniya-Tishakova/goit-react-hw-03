import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ name, number, onDelete }) {
  return (
    <>
      <p className={css.text}>
        <BsPersonFill />
        {name}
      </p>
      <p className={css.text}>
        <FaPhoneAlt />
        {number}
      </p>
      <button className={css.button} onClick={() => onDelete}>
        Delete
      </button>
    </>
  );
}
