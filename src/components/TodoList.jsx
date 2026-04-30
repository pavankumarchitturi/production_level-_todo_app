import TodoItem  from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask, editTask }) => {
    return (
        <div className="list">
            <ul>
                {tasks.length === 0 ? (
                <p>No tasks found. Try adding one ✏</p>
            ) : (
                tasks.map((task) => (
                    <li key={task.id}>
                        <TodoItem
                            task={task}
                            deleteTask={deleteTask}
                            toggleTask={toggleTask}
                            editTask={editTask}
                        />
                    </li>
                ))
            )}
            </ul>
        </div>
    );
};

export default TodoList;