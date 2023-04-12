import React from 'react';
import {
	FiltersContainer,
	ItemsLeft,
	FilterButtonContainer,
	FilterButon,
} from './TodoFiltersComponents';

const TodoFilters = () => {
	return (
		<FiltersContainer>
			<ItemsLeft />
			<FilterButtonContainer>
				<FilterButon filter='All' />
				<FilterButon filter='Active' />
				<FilterButon filter='Completen' />
			</FilterButtonContainer>
		</FiltersContainer>
	);
};

export default TodoFilters;
