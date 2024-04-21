import profileSlice from "../slices/profileSlice";
import todoSlice from "../slices/todoSlice"
import { configureStore } from "@reduxjs/toolkit"



export const  store = configureStore({
    reducer: {
        profile : profileSlice,
        todos : todoSlice
    }
 
});

