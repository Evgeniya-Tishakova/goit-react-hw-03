import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <>
      <p className={css.text}>
        <BsPersonFill className={icon} />
        {name}
      </p>
      <p className={css.text}>
        <FaPhoneAlt className={icon} />
        {number}
      </p>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
