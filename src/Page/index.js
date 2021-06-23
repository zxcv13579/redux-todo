import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import VisibleTodoList from '../containers/VisibleTodoList';

import { addTodo, toggleTodo, setVisibilityFilter } from "../redux/action/";
import { VisibilityFilters } from "../redux/action"





const Page = () => {
  const input = useRef();
  const dispatch = useDispatch()
  const filterTodos = useSelector(state => state.visibilityFilter)
  const todos = useSelector(state => state.todos);



  const unTodo = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed)
    return uncompletedTodos.length
  })




  return (
    <div>
      {/* <p>{count}</p>
      <button onClick={() => dispatch(INCREMENT)}>+</button>
      <button onClick={() => dispatch(DECREMENT)}>-</button> */}
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.current.value.trim()) {
          return
        }
        dispatch(addTodo(input.current.value))
        input.current.value = ''

      }}>
        <input type="text" ref={input} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <VisibleTodoList />


      <p>============上面為DEMO============</p>

      <ul>
        {todos.map((i, k) => {
          return (
            <li
              key={k}
              onClick={() => { dispatch(toggleTodo(i.id)) }}
              style={{
                textDecoration: i.completed ? 'line-through' : 'none'
              }}
            >
              {i.text}
            </li>
          )
        })}
      </ul>


      <p>{filterTodos}</p>
      <p>總共: {todos.length}</p>
      <p>未完成: {unTodo}</p>


      <button onClick={() => { dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)) }}>ALL</button>
      <button onClick={() => { dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)) }}>COMPLETE</button>
      <button onClick={() => { dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)) }}>ACTIVE</button>
    </div >
  )
};

export default Page
