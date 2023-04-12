import React from 'react';
import TodoFilters from './TodoFilters';

function TodoList({ todos }) {
	return (
		<div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
			{children}
			<TodoFilters />
		</div>
	);
}

export default TodoList;
