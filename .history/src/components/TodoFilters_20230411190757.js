import React from 'react';
import {
	FiltersContainer,
	ItemsLeft,
	FilterButtonContainer,
	FilterButon,
} from './TodoFiltersComponents';

const TodoFilters = ({
	total,
	activeFilter,
	showAllTodos,
	showActiveTodos,
	showCompletedTodos,
	handleClearCompleted,
}) => {
	return (
		<FiltersContainer>
			<ItemsLeft />
			<FilterButtonContainer>
				<FilterButon action={() => showAllTodos()} active='all' filter='All' />
				<FilterButon
					action={() => showActiveTodos()}
					active='all'
					filter='Active'
				/>
				<FilterButon
					action={() => showCompletedTodos()}
					active='all'
					filter='Completed'
				/>
			</FilterButtonContainer>

			<button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'>
				Clear Completed
			</button>
		</FiltersContainer>
	);
};

export default TodoFilters;
