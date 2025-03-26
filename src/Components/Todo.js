const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.title}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Realizada
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;