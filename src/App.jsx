import './App.css'
import TodoItem from './components/todoItem'
import TodoList from './components/todoList'

function App() {
  
  return (
    <div className='p-5'>
      
      <h1
        className='text-center mb-5 font-extrabold text-3xl bg-black text-white w-auto p-2 rounded-md sm:text-4xl sm:p-3 lg:text-2xl lg:p-2'
      >TODO APP</h1>

      <TodoList />
    </div>
  )
}

export default App
