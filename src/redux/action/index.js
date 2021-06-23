export const INCREMENT = {
  type: "INCREMENT"
}

export const DECREMENT = {
  type: "DECREMENT"
}


let nextTodoId = 0
export const ADD_TODO = "ADD_TODO"
export const addTodo = payload => ({ type: ADD_TODO, id: nextTodoId++, text: payload })

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = payload => ({ type: TOGGLE_TODO, id: payload });

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const filterTodo = payload => ({ type: "SET_VISIBILITY_FILTER", filter: payload })