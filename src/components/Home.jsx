import React, { useEffect, useState } from 'react'
import Edit from './Edit'
import Input from './Input'
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

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<div className='mt-10 mb-10 p-10 w-1/3 bg-emerald-700 rounded-2xl'>
			<h1 className='text-center text-4xl mb-10 font-medium text-emerald-500'>
				Todo List
			</h1>
			{todos.map((todo, idx) =>
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
			)}
			<Input setTodos={setTodos} />
		</div>
	)
}

export default Home
