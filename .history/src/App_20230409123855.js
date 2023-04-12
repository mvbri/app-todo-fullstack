import './App.css';
import Title from './components/Title';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className='bg-gray-900 min-h-screen h-ful text-gray-100 flex items-center justify-center py-20 px-5'>
			<div className='container flex flex-col max-w-xl'>
				<Title />
				<TodoInput />
				<TodoList>
					<h2>Lista de Todos</h2>
				</TodoList>
			</div>
		</div>
	);
}

export default App;
