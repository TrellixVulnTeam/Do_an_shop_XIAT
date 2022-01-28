import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/CounterSlice"
import TodoReducer from "../features/counter/TodoSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        addTodo: TodoReducer
    }
})



