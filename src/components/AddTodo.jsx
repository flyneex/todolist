import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { v4 as uuidv4 } from 'uuid'
import '../index.css'

const AddTodo = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
		if (title) {
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
	}

	return (
		<div className='mt-20 mb-20 w-3/4 absolute -bottom-24'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && addTodo(title)}
				placeholder='Add todo'
				className='text-center text-2xl rounded-xl p-5 w-full outline-none'
			/>
			<div>
				<CiCirclePlus
					size={55}
					className='text-emerald-700 hover:text-indigo-600 cursor-pointer transition-all absolute top-2 right-2 hover:rotate-90'
					onClick={() => addTodo(title)}
				/>
			</div>
		</div>
	)
}

export default AddTodo
