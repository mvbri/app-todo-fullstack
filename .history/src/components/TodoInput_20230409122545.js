import React from 'react';

function TodoInput() {
	return (
		<div className='mt-6 relative'>
			<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
				<span className='border border-gray-500 border-solid p-3'></span>
			</div>
		</div>
	);
}

export default TodoInput;
