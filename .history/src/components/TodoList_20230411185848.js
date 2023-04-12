import React from 'react';
import Todo from './Todo';
import TodoFilters from './TodoFilters';

function TodoList({ todos, handleSetComplete, handleDelete }) {
	return (
		<div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					handleSetComplete={handleSetComplete}
					handleDelete={handleDelete}
				/>
			))}
			<TodoFilters activeFilter={TodoFilters} total={todos.length} />
		</div>
	);
}

export default TodoList;
