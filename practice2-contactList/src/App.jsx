import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
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

// context
export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

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

  // Memoization
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  }, []);

  return (
    <div className="App">
      <h1>Contact List</h1>
      {/* context */}
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <ContactEditor />
          <ContactList />
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
