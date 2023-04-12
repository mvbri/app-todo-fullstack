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
				<FilterButon action={() => {}} active='all' filter='All' />
				<FilterButon action={() => {}} active='all' filter='Active' />
				<FilterButon action={() => {}} active='all' filter='Completed' />
			</FilterButtonContainer>
		</FiltersContainer>
	);
};

export default TodoFilters;
