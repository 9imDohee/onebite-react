import { useContext, memo } from "react";
import { ContactDispatchContext } from "../App";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
  // context
  const { onDelete } = useContext(ContactDispatchContext);

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

const memoizedContactItem = memo(ContactItem);
export default memoizedContactItem;
