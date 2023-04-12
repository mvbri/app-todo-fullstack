import React from 'react';

const Todo = ({ todo }) => {
	const { title, completed } = todo;

	return (
		<div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
			<div className='flex items-center'>
				{completed ? (
					<div>
						<img className='h-4 w-4' src='/check-icon.svg' alt='Check Icon' />
					</div>
				) : (
					<span className='border-solid border border-gray-500 rounded-full p-3 cursor-pointer'></span>
				)}
				<p className='pl-3'>{title}</p>
			</div>
			<img
				className='h-5 w-5 cursor-pointer trasition-all duration-300 ease-in'
				src='./close-icon.svg'
				alt='icon'
			/>
		</div>
	);
};

export default Todo;
