import css from "./SearchBox.module.css";

export default function Filter(value, onFilter) {
  console.log(value);
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(value) => onFilter(value)}
      />
    </div>
  );
}
