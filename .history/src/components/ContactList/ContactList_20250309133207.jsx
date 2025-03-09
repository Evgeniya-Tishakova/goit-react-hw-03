import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ users }) {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li className={css.item} key={user.id}>
          <Contact />
        </li>
      ))}
    </ul>
  );
}
