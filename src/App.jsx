import { useMemo, useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { getFilteredTasks } from "./utils";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  const { tasks, addTask, deleteTask, toggleTask, editTask} = useTasks();

  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredTasks = useMemo(
    () => getFilteredTasks(tasks, filter, search),
    [tasks, filter, search]
  );


  return (
    <div className="app">
      <Header />
      <TodoInput addTask={addTask} />

      <div className="search-filter">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar setFilter={setFilter} />
      </div>

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