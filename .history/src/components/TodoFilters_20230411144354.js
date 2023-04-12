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
				<FilterButon action={() => {}} active='All' filter='All' />
				<FilterButon action={() => {}} active='All' filter='Active' />
				<FilterButon action={() => {}} active='All' filter='Completed' />
			</FilterButtonContainer>
		</FiltersContainer>
	);
};

export default TodoFilters;
