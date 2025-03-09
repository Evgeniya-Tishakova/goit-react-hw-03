import css from "./ContactList.module.css";

export default function ContactList() {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li className={css.item} key={user.id}></li>
      ))}
    </ul>
  );
}
