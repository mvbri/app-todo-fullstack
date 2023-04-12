import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
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

	const addTodo = (title) => {
		const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

		const newTodo = {
			id: lastId + 1,
			title,
			completed: false,
		};

		const todoList = [...todos];
		todoList.push(newTodo);
		setTodos(todoList);
	};

	const handleSetCompleted = (id) => {
		const updatedList = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedList);
	};

	return (
		<div className='bg-gray-900 min-h-screen h-ful text-gray-100 font-inter flex items-center justify-center py-20 px-5'>
			<div className='container flex flex-col max-w-xl'>
				<Title />
				<TodoInput addTodo={addTodo} />
				<TodoList todos={todos} handleSetCompleted={handleSetCompleted} />
			</div>
		</div>
	);
}

export default App;
