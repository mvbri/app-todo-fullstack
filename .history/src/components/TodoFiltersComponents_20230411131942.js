export const FiltersContainer = ({ children }) => {
	return (
		<div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
			{children}
		</div>
	);
};

export const ItemsLeft = ({ total = 0 }) => {
	return <p className='text-gray-400 text-sm'>{total} items left</p>;
};

export const FilterButtonContainer = ({ children }) => {
	return <div className='flex items-center space-x-2'>{children}</div>;
};

export const FilterButon = ({ action, active, filter }) => {
	return (
		<button
			className={`hover:text-white cursor-pointer transition-all duration-300`}
		></button>
	);
};
