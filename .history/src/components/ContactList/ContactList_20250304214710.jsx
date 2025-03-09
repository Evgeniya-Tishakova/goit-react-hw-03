import css from "./ContactList.module.css";

export default function ContactList({ visibleUsers, id }) {
  return (
    <ul className={css.list}>
      {users.map((visibleUser) => (
        <li className={css.item} key={visibleUsers.id}></li>
      ))}
    </ul>
  );
}
