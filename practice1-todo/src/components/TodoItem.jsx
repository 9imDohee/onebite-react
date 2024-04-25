import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date }) => {
  // context
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
