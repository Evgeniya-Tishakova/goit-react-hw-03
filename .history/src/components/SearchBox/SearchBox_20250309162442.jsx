import css from "./SearchBox.module.css";

export default function Filter() {
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
          <input type="text" value={users} onChange={}/>
    </div>
  );
}
