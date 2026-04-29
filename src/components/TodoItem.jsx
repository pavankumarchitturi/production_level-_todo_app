import { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = (e) => {
    e.preventDefault(); 
    if (!newText.trim()) return;

    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
   <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            marginLeft: "10px",
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={() => setIsEditing(true)} disabled = {task.completed}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
};

export default TodoItem;

