import ContactItem from "./ContactItem";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <div className="ContactList">
      <h3>Contact List</h3>
      <div className="contacts">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default ContactList;
