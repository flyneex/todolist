import React, { useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'

const Edit = ({ editTodo, todo }) => {
	const [title, setTitle] = useState(todo.title)
	return (
		<div className='relative'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && editTodo(title, todo._id)}
				placeholder='Update todo'
				className='text-center text-2xl rounded-xl p-5 w-full outline-none mb-5'
			/>
			<CiCircleCheck
				onClick={() => editTodo(title, todo._id)}
				size={55}
				className='text-emerald-700 hover:text-indigo-600 cursor-pointer transition-all absolute top-2 right-2'
			/>
		</div>
	)
}

export default Edit
