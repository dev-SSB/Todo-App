import React from 'react'

const TodoItem = ( {todo,removoTodo} ) => {
  return (
    <div className='text-wrap flex items-center justify-between gap-x-2 bg-green-200 w-9/12 mb-1 p-3 sm:w-5/12 lg:w-1/5'> 
        <h1 className=' text-md sm:text-xl lg:text-base font-medium'>{todo.text}</h1>
        <button 
            onClick={ ()=> removoTodo(todo.id) }
            className='px-2 py-1 text-base sm:px-3 sm:py-2 sm:text-lg lg:text-sm  bg-red-300 rounded-md font-bold'
        >Delete</button>
    </div>
  )
}

export default TodoItem