import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {
      console.error(e);
    }
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev,
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return { tasks, addTask, deleteTask, toggleTask, editTask };
};