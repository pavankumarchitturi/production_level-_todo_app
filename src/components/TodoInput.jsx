import { useState, useRef, useEffect } from "react";

const PRIORITIES = ["low", "medium", "high"];

const TodoInput = ({ addTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Task cannot be empty");
      return;
    }

    addTask(text, priority);
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

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        {PRIORITIES.map(p => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <button>Add</button>
    </form>
  );
};

export default TodoInput;