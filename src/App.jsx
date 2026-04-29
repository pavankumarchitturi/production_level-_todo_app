import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    return data || [];
  });

 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
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

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === "COMPLETED") return t.completed;
      if (filter === "PENDING") return !t.completed;
      return true;
    })
    .filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="app">
      <Header />
      <TodoInput addTask={addTask} />
      <SearchBar setSearch={setSearch} />
      <FilterBar setFilter={setFilter} />

      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <Footer tasks={tasks} />
    </div>
  );
};

export default App;