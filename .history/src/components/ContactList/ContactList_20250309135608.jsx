import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ users }) {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <Contact
          key={user.id}
          name={user.name}
          number={user.number}
          onDelete={user.}
        />
        </li>
      ))}
    </ul>
  );
}
