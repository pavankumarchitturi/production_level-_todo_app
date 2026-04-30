export const getFilteredTasks = (tasks, filter, search) => {
  return tasks
    .filter((t) => {
      if (filter === "COMPLETED") return t.completed;
      if (filter === "PENDING") return !t.completed;
      return true;
    })
    .filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );
};