import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete }) {
  return (
    <>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button className={css.button}>{onDelete}</button>
    </>
  );
}
