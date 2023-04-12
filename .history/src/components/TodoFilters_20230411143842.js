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
				<FilterButon filter='all' />
				<FilterButon filter='active' />
				<FilterButon />
			</FilterButtonContainer>
		</FiltersContainer>
	);
};

export default TodoFilters;
