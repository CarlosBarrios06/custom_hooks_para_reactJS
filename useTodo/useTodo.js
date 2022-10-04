import { useEffect } from 'react'
import { useReducer } from 'react'
import { TodoReducer } from './TodoReducer'


export const useTodo = () => {
    let initialState = []
 
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }   

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    const todosCounter = todos.filter(todo => todo.done === false).length;

    const pending = todos.length;

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    
      
    }, [todos])
    

    const HandleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add TODO",
            payload:todo
        }

        dispatch(action)
    }

    const HandleRemoveTodo = (id) => {
        const action = {
            type:'[TODO] Remove TODO',
            payload:id
        }

        dispatch(action)
    }

    const onToggleTodo = (id) => {
        const action = {
            type:'[TODO] Change Done',
            payload:id
        }

        dispatch(action)
    }

    return {
        todos,
        HandleNewTodo,
        HandleRemoveTodo,
        onToggleTodo,
        todosCounter,
        pending
    }
}
