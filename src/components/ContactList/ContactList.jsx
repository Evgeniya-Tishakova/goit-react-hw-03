import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ users, onDelete }) {
  return (
    <ul className={css.list}>
      {users.map((user, i) => (
        <li key={i} className={css.item}>
          <Contact
            id={user.id}
            name={user.name}
            number={user.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
