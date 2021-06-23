import React from 'react'


// {todos.map((i, k) => {
//   return (
//     <li
//       key={k}
//       onClick={() => { dispatch(toggleTodo(i.id)) }}
//       style={{
//         textDecoration: i.completed ? 'line-through' : 'none'
//       }}
//     >
//       {i.text}
//     </li>
//   )
// })}

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo =>
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </li>
      )}
    </ul>
  )
}

export default TodoList
