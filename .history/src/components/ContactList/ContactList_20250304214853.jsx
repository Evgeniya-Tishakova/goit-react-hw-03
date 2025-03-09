import css from "./ContactList.module.css";

export default function ContactList({ users, id }) {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li className={css.item} key={user.id}>
          <User />
        </li>
      ))}
    </ul>
  );
}
