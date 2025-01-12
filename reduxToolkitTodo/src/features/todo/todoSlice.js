import {createSlice, nanoid} from '@reduxjs/toolkit';
// nanoid provides unique ids

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload //now payload is a object and you can access as per your convience, action.payload.text, action.payload.id etc
            }
            state.todos.push(todo) //array baneichu upare na dekh initialstate re, object thile property add karithantu
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) 
        },
    }
})

//state and action default values ase, 
//abika initial state ra kn kn value and variable achi seita dia state variable, initial state ta agaku jaiki change heijiba na
// action ta sei todos ra jaha jaha character define heichi tara access dabaku use hue


export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer