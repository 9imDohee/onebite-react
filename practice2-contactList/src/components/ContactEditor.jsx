import { useState, useContext } from "react";
import { ContactDispatchContext } from "../App";
import "./ContactEditor.css";

const ContactEditor = () => {
  // context
  const { onCreate } = useContext(ContactDispatchContext);

  const [contact, setContact] = useState({ name: "", email: "" });

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (contact.name === "" || contact.email === "") {
      return;
    }
    onCreate(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <div className="contact-editor">
      <h3>Add Contact</h3>
      <div className="input-container">
        <input
          name="name"
          value={contact.name}
          onChange={onInputChange}
          className="name-input"
          placeholder="이름"
        />
        <input
          name="email"
          value={contact.email}
          onChange={onInputChange}
          className="email-input"
          placeholder="연락처(이메일)"
        />
      </div>
      <button onClick={onSubmit} className="add-button">
        Add
      </button>
    </div>
  );
};
export default ContactEditor;
