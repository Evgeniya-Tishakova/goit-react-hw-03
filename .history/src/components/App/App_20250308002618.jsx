import { useState } from "react";
import { nanoid } from "nanoid";

import { useId } from "react";

import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [users, setUsers] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filterContacts, setFilterContacts] = useState("");

  const addUsers = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
    console.log(users);
  };

  const searchUsers = users.filter((user) => user.name.toLowerCase());

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addUsers} />
      </div>
    </>
  );
}
