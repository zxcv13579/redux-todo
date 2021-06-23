import { ADD_TODO, TOGGLE_TODO, VisibilityFilters } from "../action";
// import { TOGGLE_TODO } from "../action";
const DEFAULT_TODO = []
export default (state = DEFAULT_TODO, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    // case "SET_VISIBILITY_FILTER":
    //   return filterTodos(state, action)

    default:
      return state
  }
}
