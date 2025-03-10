import { useState, useEffect } from "react";

import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [users, setUsers] = useState(() => {
    const users = localStorage.getItem("users");
    if (users) {
      return JSON.parse(users);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filterContacts, setFilterContacts] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const deleteUser = (userId) => {
    console.log(1234, userId);
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addUser} />
        <SearchBox value={filterContacts} onFilter={setFilterContacts} />
        <ContactList users={filterUsers} onDelete={deleteUser} />
      </div>
    </>
  );
}
