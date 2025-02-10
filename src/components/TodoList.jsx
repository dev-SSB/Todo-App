import React, { useState, useEffect } from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addOrUpdateTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;

    if (editId) {
      // Edit existing todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputValue } : todo
        )
      );
      setEditId(null);
    } else {
      // Add new todo
      const newTodo = { id: Math.random(), text: inputValue };
      setTodos((prev) => [newTodo, ...prev]);
    }
    
    setInputValue('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    setInputValue(selectedTodo.text);
    setEditId(id);
  };

  return (
    <div className='w-full h-screen'>
      <form onSubmit={addOrUpdateTodo} className="mb-10 shadow-md shadow-green-300 flex gap-3 items-center justify-center w-full pb-3 sm:pb-5 lg:pb-3">
        <textarea
          type="text"
          value={inputValue}
          placeholder="Enter Todo Work"
          onChange={(e) => setInputValue(e.target.value)}
          className="text-sm text-center resize-none px-3 py-2 sm:px-10 sm:py-2 sm:text-xl lg:px-15 lg:py-1 border-solid border-2 border-green-400 rounded-md bg-transparent font-medium w-2/3 sm:w-3/4 h-20 sm:h-24"
          
        />
        <input
          type="submit"
          value={editId ? "UPDATE" : "ADD"}
          className="border border-green-500 bg-green-200 rounded-md font-bold text-sm px-2 py-1 sm:text-xl sm:px-4 sm:py-2 lg:px-3 lg:py-1"
        />
      </form>

      <div className="flex justify-center items-center gap-5 flex-wrap m-2 w-full">
        {todos.map((obj) => (
          <TodoItem key={obj.id} todo={obj} removoTodo={removeTodo} editTodo={editTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;