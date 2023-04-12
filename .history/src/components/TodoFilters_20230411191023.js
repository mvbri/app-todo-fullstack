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
			<ItemsLeft total={total} />
			<FilterButtonContainer>
				<FilterButon
					action={() => showAllTodos()}
					active={activeFilter}
					filter='All'
				/>
				<FilterButon
					action={() => showActiveTodos()}
					active={activeFilter}
					filter='Active'
				/>
				<FilterButon
					action={() => showCompletedTodos()}
					active={activeFilter}
					filter='Completed'
				/>
			</FilterButtonContainer>

			<button
				onClick={() => handleClearCompleted()}
				className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'
			>
				Clear Completed
			</button>
		</FiltersContainer>
	);
};

export default TodoFilters;
