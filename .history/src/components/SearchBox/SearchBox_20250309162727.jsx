import css from "./SearchBox.module.css";

export default function Filter(value, onFilter) {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
