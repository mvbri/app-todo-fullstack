const FiltersContainer = ({ children }) => {
	<div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
		{children}
	</div>;
};

const ItemsLeft = ({ children }) => {
	return <p className='text-gray-400'></p>;
};

export { FiltersContainer };
