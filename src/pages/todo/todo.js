import React from "react";

export default function Todo(props) {
  const { todo } = props;

  const toggleDone = () => {
    props.doneChange(todo.id);
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    props.deleteTodo(todo.id);
  };

  const className = todo.done ? "done-todo" : "";

  return (
    <div className={`todo ${className} todo-${todo.id}`}>
      <p className="toggle-todo" onClick={() => toggleDone()}>
        {todo.name}
      </p>
        <span className="delete-todo"  onClick={(e) => deleteTodo(e)}>
        Delete
      </span>
    </div>
  );
}
