import cn from 'classnames'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo, changeTodo, editTodo, deleteTodo }) => {
	return (
		<div
			className={cn(
				'flex justify-between items-center mb-5 bg-emerald-500 p-5 rounded-xl text-white',
				{
					'line-through': todo.isCompleted,
					'bg-slate-500': todo.isCompleted,
					'text-slate-500': todo.isCompleted,
				}
			)}
		>
			<div>
				<button
					className={cn('flex text-2xl text-white')}
					onClick={() => changeTodo(todo._id)}
				>
					{/* <Check isCompleted={todo.isCompleted} /> */}
					<span className='text-left'>{todo.title}</span>
				</button>
			</div>
			<div className='flex'>
				<div>
					<BsPencilSquare
						size={24}
						onClick={() => editTodo(todo._id)}
						className='hover:text-blue-600 cursor-pointer transition-all text-white'
					/>
				</div>
				<div>
					<BsTrash
						size={24}
						onClick={() => deleteTodo(todo._id)}
						className='ml-5 hover:text-red-700 cursor-pointer transition-all text-white'
					/>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
