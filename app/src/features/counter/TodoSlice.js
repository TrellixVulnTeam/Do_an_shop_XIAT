import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState:[],
    reducers:
    {
        AddTodo(state, { payload })
        {
            state.push(payload)
        }
    }
})

export const { AddTodo } = todoSlice.actions

export const dataTodo = ( todos ) => todos

export default todoSlice.reducer