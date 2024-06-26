import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./Editor.css";

const Editor = () => {
  // context (구조분해할당)
  const { onCreate } = useContext(TodoDispatchContext);

  // input
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // button
  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="새로운 todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
