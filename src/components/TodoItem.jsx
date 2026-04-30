import { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
    setNewText(task.text);
  };

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
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={handleEdit} disabled={task.completed}>
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
};

export default TodoItem;