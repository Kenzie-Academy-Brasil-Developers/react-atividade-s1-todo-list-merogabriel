import React from 'react'

export default function TodoList({todos, handleTodo}) {
    return (
        <ul>
            {todos && todos.map((item, i) =>
                <li key={i}>{item}</li>
            )}
        </ul>
    )
}
