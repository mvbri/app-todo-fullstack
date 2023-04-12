import React from 'react';
import Todo from './Todo';
import TodoFilters from './TodoFilters';

function TodoList({
	todos,
	handleSetComplete,
	handleDelete,
	activeFilter,
	showAllTodos,
	showActiveTodos,
	showCompletedTodos,
	handleClearCompleted,
}) {
	return (
		<div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todos={todo}
					handleSetComplete={handleSetComplete}
					handleDelete={handleDelete}
				/>
			))}
			<TodoFilters
				activeFilter={activeFilter}
				total={todos.length}
				showAllTodos={showAllTodos}
				showActiveTodos={showActiveTodos}
				showCompletedTodos={showCompletedTodos}
				handleClearCompleted={handleClearCompleted}
			/>
		</div>
	);
}

export default TodoList;
