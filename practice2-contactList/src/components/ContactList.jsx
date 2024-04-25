import { useContext } from "react";
import { ContactStateContext } from "../App";
import ContactItem from "./ContactItem";
import "./ContactList.css";

const ContactList = () => {
  // context
  const contacts = useContext(ContactStateContext);

  console.log(contacts);
  return (
    <div className="ContactList">
      <h3>Contact List</h3>
      <div className="contacts">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
export default ContactList;
