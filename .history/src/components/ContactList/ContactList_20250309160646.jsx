import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ users, onDelete }) {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li key={user.id} className={css.item}>
          <Contact name={user.name} number={user.number} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
