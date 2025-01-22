import React, { useState, useEffect } from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  const addTodo = (e) => {
    if (inputValue.trim().length > 0) {
      const newTodo = { id: Math.random(), text: inputValue };
      setTodos((prev) => [...prev, newTodo]);
      setInputValue('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="mb-10 shadow-lg flex gap-5 items-center justify-center sm:pb-5 lg:pb-3 pb-3">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Name of Todo Work"
          onChange={(e) => setInputValue(e.target.value)}
          className="px-2 py-1 sm:px-4 sm:py-2 sm:text-xl lg:px-3 lg:py-1 border-solid border-2 border-black rounded-md bg-transparent font-medium"
        />
        <input
          type="submit"
          value="ADD"
          onClick={addTodo}
          className="px-3 py-1 bg-green-300 rounded-md sm:text-xl sm:px-4 sm:py-2  lg:px-3 lg:py-1 font-bold"
        />
      </form>

      <div className="flex justify-center items-center gap-5 flex-wrap m-2">
        {todos.map((obj) => (
          <TodoItem key={obj.id} todo={obj} removoTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
