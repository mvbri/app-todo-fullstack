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
				<FilterButon action={() => {}} filter='All' />
				<FilterButon action={() => {}} filter='Active' />
				<FilterButon action={() => {}} filter='Completed' />
			</FilterButtonContainer>
		</FiltersContainer>
	);
};

export default TodoFilters;
