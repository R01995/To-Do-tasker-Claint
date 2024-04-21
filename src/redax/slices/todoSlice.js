import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        newTodos:[],
        progessTodos:[],
        completedTodos:[],
        cancelTodos:[]
    },
    reducers:{
        createNewTodo: (state, action) =>{
            state.newTodos = action.payload;
        },
        createProgessTodo: (state,action)=>{
            state.progessTodos= action.payload;  //add to the list of in-
        } ,
        createCompletedTodo: (state, action) =>{
            state.completedTodos = action.payload;   // add to completed todos
        },
        createCancelTodo: (state, action) =>{
            state.cancelTodos = action.payload;     // remove from active todos and add to
        }
    }
}) 


export const {createNewTodo, createProgessTodo, createCompletedTodo, createCancelTodo} = todoSlice.actions
export default  todoSlice.reducer;