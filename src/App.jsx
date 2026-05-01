import { useMemo, useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { getFilteredTasks } from "./utils";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";

const App = () => {
  const { tasks, addTask, deleteTask, toggleTask, editTask, clearCompleted } = useTasks();

  const [filter, setFilter] = useState("ALL");

  const filteredTasks = useMemo(
    () => getFilteredTasks(tasks, filter),
    [tasks, filter]
  );

  const hasCompleted = tasks.some(t => t.completed);

  return (
    <div className="app">
      <Header />

      <TodoInput addTask={addTask} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
        hasCompleted={hasCompleted}
      />

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