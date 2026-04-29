import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask, editTask }) => {

    return (
        <div className="list">
            <ul>
                {tasks.length === 0 ? (
                    <p> No tasks found</p>
                ) : (
                tasks.map((task) => (
                 <li key={task.id}>
                <TodoItem
                    key={task.id}
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

