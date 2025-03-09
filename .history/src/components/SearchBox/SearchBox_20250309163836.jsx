import css from "./SearchBox.module.css";

export default function Filter(value, onFilter) {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(actions) => onFilter(event.target.value)}
      />
    </div>
  );
}
