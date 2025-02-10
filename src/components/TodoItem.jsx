import React from 'react'

const TodoItem = ( {todo,removoTodo,editTodo} ) => {
  return (
    <div className='shadow-md shadow-green-200 border border-green-500 hover:bg-green-200 rounded-md text-wrap flex flex-col gap-2 justify-between gap-x-2 bg-green-100 w-5/6 mb-1 p-3 sm:w-5/12 lg:w-1/5 min-h-48'> 

        <h1 className='text-md sm:text-xl lg:text-base font-semibold'>{todo.text}</h1>

        <div className='flex justify-between sm:mt-2'>
          <button 
              className='border border-green-500 text-center px-2 py-1 text-base sm:px-3 sm:py-1 sm:text-xl lg:text-sm  bg-green-300 rounded-md font-bold'
              onClick={() => editTodo(todo.id)}
          >Edit</button>
          <button   
              onClick={ ()=> removoTodo(todo.id) }
              className='border border-red-500 text-center px-2 py-1 text-base sm:px-3 sm:py-1 sm:text-xl lg:text-sm  bg-red-300 rounded-md font-bold'
          >Delete</button>
        </div>

    </div>
  )
}

export default TodoItem