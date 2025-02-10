import './App.css'
import TodoItem from './components/todoItem'
import TodoList from './components/todoList'

function App() {
  
  return (
    <div className='p-5 font-mono w-full h-screen'>
      
      <h1
        className='mb-2 w-auto text-center font-extrabold text-5xl p-2 sm:text-6xl sm:p-3 lg:text-5xl lg:p-2 text-green-500'
      >TODO APP</h1>

      <TodoList />
    </div>
  )
}

export default App
