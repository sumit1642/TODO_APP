import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/TodoAppSlice";

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});
