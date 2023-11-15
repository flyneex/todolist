import cn from 'classnames'
import React from 'react'
import { VscCheck } from 'react-icons/vsc'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-sm mr-5 w-5 h-5 flex items-center border-emerald-400 text-white',
				{
					'bg-emerald-400': isCompleted,
				}
			)}
		>
			{isCompleted && <VscCheck size={24} />}
		</div>
	)
}

export default Check
