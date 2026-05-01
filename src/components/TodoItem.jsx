import { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    if (!text.trim()) return;
    editTask(task.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        disabled={isEditing}
      />

      {isEditing ? (
        <input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <span className={`task-text ${task.completed ? "done" : ""}`}>
          {task.text}
        </span>
      )}

      <span className={`priority ${task.priority}`}>
        {task.priority}
      </span>

      <button onClick={() => setIsEditing(true)} disabled={task.completed}>
        Edit
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;