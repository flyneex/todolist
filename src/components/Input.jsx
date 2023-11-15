import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Input = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
		setTodos(prev => [
			{
				_id: uuidv4(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}

	return (
		<div className='mt-20 mb-20'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && addTodo(title)}
				placeholder='Add todo'
				className='text-center text-2xl rounded-xl p-5 w-full outline-none'
			/>
		</div>
	)
}

export default Input
