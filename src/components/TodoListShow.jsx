import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, setFilter, selectFilteredTodos } from "../redux/TodoAppSlice";
import { TodoContainer, FilterButtons, TodoList, TodoItem, EmptyTodoMessage } from "./EnhancedUI";

export const TodoListShow = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectFilteredTodos);
	const currentFilter = useSelector((state) => state.todo.filter);
	const filters = ["all", "active", "completed"];

	const handleFilterClick = (filter) => {
		dispatch(setFilter(filter));
	};

	const handleToggleTodo = (todoId) => {
		dispatch(toggleTodo(todoId));
	};

	const handleDeleteTodo = (todoId) => {
		dispatch(deleteTodo(todoId));
	};

	return (
		<TodoContainer>
			<FilterButtons
				filters={filters}
				currentFilter={currentFilter}
				onFilterClick={handleFilterClick}
			/>
			<TodoList>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggle={() => handleToggleTodo(todo.id)}
						onDelete={() => handleDeleteTodo(todo.id)}
					/>
				))}
			</TodoList>
			{todos.length === 0 && <EmptyTodoMessage />}
		</TodoContainer>
	);
};
