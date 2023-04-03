import { useReducer } from "react";
import todoReducer from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "La piedra del alma",
    //   done: false,
    // },
  
  ];

const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    
    const handleNewTodo = (todo) => {
        const action = {
          type: '[TODO] Add Todo',
          payload: todo
        }
        dispatch(action);
      }
    
      const handleDeleteTodo = (id) => {
        dispatch ({
          type: '[TODO] Todo Remove',
          payload: id
        })
      }
    
      const onToggleTodo = (id) => {
        dispatch ({
          type: '[TODO] Toggle Todo',
          payload: id
        })
      }

      return {
        handleDeleteTodo,
        handleNewTodo,
        onToggleTodo, 
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length
      }
}

export default useTodo