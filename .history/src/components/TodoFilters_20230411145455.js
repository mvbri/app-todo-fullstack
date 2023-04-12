import React from 'react';
import {
	FiltersContainer,
	ItemsLeft,
	FilterButtonContainer,
	FilterButon,
} from './TodoFiltersComponents';

const TodoFilters = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Watch the next Marvel movie',
			completed: false,
		},
		{
			id: 2,
			title: 'Record the next video',
			completed: false,
		},
		{
			id: 3,
			title: 'Wash the dishes',
			completed: false,
		},
		{
			id: 4,
			title: 'Study 2 hours',
			completed: false,
		},
	]);

	return (
		<FiltersContainer>
			<ItemsLeft />
			<FilterButtonContainer>
				<FilterButon action={() => {}} active='all' filter='All' />
				<FilterButon action={() => {}} active='all' filter='Active' />
				<FilterButon action={() => {}} active='all' filter='Completed' />
			</FilterButtonContainer>

			<button className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'>
				Clear Completed
			</button>
		</FiltersContainer>
	);
};

export default TodoFilters;
