export const getFilteredTasks = (tasks, filter) => {
  if (filter === "Active") return tasks.filter(t => !t.completed);
  if (filter === "Completed") return tasks.filter(t => t.completed);
  return tasks;
};