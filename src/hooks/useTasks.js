import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      return  saved.map(t => ({
        ...t,
        priority: t.priority || "medium"
      }));

    } catch {
      return [];
    }
  });

  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    setTasks((prev) => [
      { id: Date.now(), text, completed: false, priority },
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

  const clearCompleted = () => {
    setTasks(prev => prev.filter(t => !t.completed));
  };

  return { tasks, addTask, deleteTask, toggleTask, editTask, clearCompleted };
};