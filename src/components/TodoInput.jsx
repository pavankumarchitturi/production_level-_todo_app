import { useState, useRef, useEffect } from "react";

const TodoInput = ({ addTask }) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Task cannot be empty");
      return;
    }
    addTask(text);
    setText("");
    inputRef.current.focus();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task..."
      />
      <button>Add</button>
    </form>
  );
};

export default TodoInput;