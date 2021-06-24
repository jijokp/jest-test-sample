import React, { useState } from "react";
import Todo from "./todo";
import AddTodo from "./add-todo";

import { toggleDone, addTodo, deleteTodo,generateId } from "../../utils";

function Todos() {
    const [todos, setTodos] = useState([
        { id: generateId(), name: "Write a blog post for Sitepoint", done: false },
        { id: generateId(), name: "Blog about Jest", done: false },
        { id: generateId(), name: "Walk the dog", done: false },
    ]);

    const onToggleDone = (id) => {
        setTodos(toggleDone(todos, id));
    };

    const onAddTodo = (todo) => {
        setTodos(addTodo(todos, todo));
    };

    const onDeleteTodo = (id) => {
        setTodos(deleteTodo(todos, id));
    };

    const renderTodos = () => {
        return todos.map((todo) => {
            return (
                <li key={todo.id}>
                    <Todo
                        todo={todo}
                        doneChange={(id) => onToggleDone(id)}
                        deleteTodo={(id) => onDeleteTodo(id)}
                    />
                </li>
            );
        });
    };

    return (
        <div>
            <h1>Things to get done:</h1>
            <ul className="todos-list">{renderTodos()}</ul>
            <AddTodo onNewTodo={(todo) => onAddTodo(todo)} />
        </div>
    );
}

export default Todos;