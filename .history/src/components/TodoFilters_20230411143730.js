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
				<FilterButon />
				<FilterButon />
				<FilterButon />
			</FilterButtonContainer>
		</FiltersContainer>
	);
};

export default TodoFilters;
