import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	filter: "all",
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push({
				id: Date.now(),
				text: action.payload,
				completed: false,
			});
		},
		toggleTodo: (state, action) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
});
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;

// Selectors
export const selectFilteredTodos = (state) => {
	const todos = state.todo.todos;
	const filter = state.todo.filter;

	switch (filter) {
		case "active":
			return todos.filter((todo) => !todo.completed);
		case "completed":
			return todos.filter((todo) => todo.completed);
		default:
			return todos;
	}
};
