import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";

export default function App() {
  const [] = useState();

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
