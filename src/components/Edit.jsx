import React, { useState } from 'react'

const Edit = ({ editTodo, todo }) => {
	const [title, setTitle] = useState(todo.title)
	return (
		<input
			type='text'
			value={title}
			onChange={e => setTitle(e.target.value)}
			onKeyDown={e => e.key === 'Enter' && editTodo(title, todo._id)}
			placeholder='Update todo'
			className='text-center text-2xl rounded-xl p-5 w-full outline-none mb-5'
		/>
	)
}

export default Edit
