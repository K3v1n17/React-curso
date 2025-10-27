import { error } from "console";
import * as z from "zod";


//* un reducer siempre devuelve un nuevo estado o valor 
//* tiene los dos parametos state y action y siempre devuelve 
//* un state si es que lo recibe

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskStates {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}


export type taskActions =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }


const TodoSchema = z.object(
    {
        id: z.number(),
        text: z.string(),
        completed: z.boolean()
    }
)

const TaskStateScheme = z.object
    (
        {
            todos: z.array(TodoSchema),
            length: z.number(),
            completed: z.number(),
            pending: z.number()

        }
    )



export const getTasksInitialState = (): TaskStates => {

    const localStorageState = localStorage.getItem('task-state')


    if (!localStorageState) {
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0,

        }


    }
    /// valdar mediante zod 

    const result = TaskStateScheme.safeParse(JSON.parse(localStorageState))

    if (result.error) {
        console.log(result.error)
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0,

        }

    }



    ////! cuidado el local storage puede venir manipulado
    // return JSON.parse(localStorageState)

    return result.data

}


export const tasksReducer = (state: TaskStates, action: taskActions): TaskStates => {


    switch (action.type) {

        case 'ADD_TODO':
            {
                const newTodo: Todo =
                {
                    id: Date.now(),
                    text: action.payload.trim(),
                    completed: false
                }

                //!! no hacer porque mutamos el state original
                // state.todos.push(newTodo);
                //* siempre regresar un nuevo estado 

                return {
                    ...state,
                    todos: [...state.todos, newTodo],
                    length: state.todos.length + 1,
                    pending: state.pending + 1

                }

            }



        case 'DELETE_TODO':
            {
                const currentTodos = state.todos.filter((todo) => todo.id != action.payload)

                return {
                    ...state,
                    todos: currentTodos,
                    length: currentTodos.length,
                    completed: currentTodos.filter((todo) => todo.completed).length,
                    pending: currentTodos.filter((todo) => !todo.completed).length,

                }

            }




        case 'TOGGLE_TODO': {
            const updatetodos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
            return {
                ...state,
                todos: updatetodos,
                completed: updatetodos.filter((todos) => todos.completed).length,
                pending: updatetodos.filter((todos) => !!todos.completed).length
            }

        }

        default:
            return state

    }





}
