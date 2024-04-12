import "./ContactItem.css";

const ContactItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };
  return (
    <div className="ContactItem">
      <div className="name">{contact.name}</div>
      <div className="email">{contact.email}</div>
      <button onClick={handleDelete} className="button">
        🗑️ Remove
      </button>
    </div>
  );
};
export default ContactItem;
