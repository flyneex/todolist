import React, { useEffect, useState } from 'react'
import { CiFaceFrown } from 'react-icons/ci'
import AddTodo from './AddTodo'
import Edit from './Edit'
import TodoItem from './TodoItem'

const Home = () => {
	const getTodos = () => {
		const todosStorage = localStorage.getItem('todos')
		if (todosStorage) {
			return JSON.parse(todosStorage)
		} else {
			return []
		}
	}

	const [todos, setTodos] = useState(getTodos())
	const [filter, setFilter] = useState(todos)

	useEffect(() => {
		setFilter(todos)
	}, [todos])

	const filterTodo = isCompleted => {
		if (isCompleted === 'all') {
			setFilter(todos)
		} else {
			let newTodo = [...todos].filter(t => t.isCompleted === isCompleted)
			setFilter(newTodo)
		}
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const editTodo = id => {
		setTodos(
			todos.map(t => (t._id === id ? { ...t, isEditing: !t.isEditing } : t))
		)
	}

	const editTask = (title, id) => {
		setTodos(
			todos.map(t =>
				t._id === id ? { ...t, title, isEditing: !t.isEditing } : t
			)
		)
	}

	const deleteTodo = id => {
		setTodos([...todos].filter(t => t._id !== id))
	}
	// window.addTodo = addTodo

	return (
		<div className='relative mt-10 mb-20 p-10 w-3/4 bg-emerald-700 rounded-2xl xs:w-3/4'>
			<h1 className='text-center text-4xl mb-10 font-medium text-emerald-500'>
				Todo List
			</h1>
			<div className='pb-5 flex justify-end text-white gap-4'>
				<button onClick={() => filterTodo('all')}>All</button>
				<button onClick={() => filterTodo(true)}>Done</button>
				<button onClick={() => filterTodo(false)}>Undone</button>
			</div>
			<div className='overflow-auto h-3/4'>
				{todos.length ? (
					filter.map((todo, idx) =>
						todo.isEditing ? (
							<Edit key={idx} editTodo={editTask} todo={todo} />
						) : (
							<TodoItem
								key={idx}
								todo={todo}
								changeTodo={changeTodo}
								editTodo={editTodo}
								deleteTodo={deleteTodo}
							/>
						)
					)
				) : (
					<h3 className='text-white text-2xl text-center mt-7'>
						You don't have any todos <CiFaceFrown className='flex' />
					</h3>
				)}
			</div>
			<AddTodo setTodos={setTodos} />
		</div>
	)
}

export default Home
