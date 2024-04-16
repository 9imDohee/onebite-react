import { useCallback, useRef, useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // Create
  const onCreate = useCallback((contact) => {
    dispatch({ type: "CREATE", data: { id: idRef.current++, ...contact } });
  }, []);

  // Delete
  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactEditor onCreate={onCreate} />
      <ContactList contacts={contacts} onDelete={onDelete} />
    </div>
  );
}

export default App;
