import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask, editTask }) => {
  if (tasks.length === 0) return <p>No tasks Found</p>;

  return (
    <div className="list">
      <ul>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;