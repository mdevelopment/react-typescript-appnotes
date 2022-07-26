import React, { useState } from 'react';
//import logo from './logo.svg';
import { InputField } from './components/InputField';
import './App.css';
import {Todo} from './components/models/model'
import TodoList from './components/TodoList';

const App:React.FC = () => {
  
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const handleAdd=(e: React.FormEvent) => {
    e.preventDefault();
   // console.log(todo)
   if (todo) {
     setTodos([...todos, {id: Date.now(), todo, isdone: false}]);
     setTodo("")
   }
  }
  console.log(todos)
  return (
    <div className="App">
      <span className='heading'> Taskify </span>
      <InputField todo={todo}  setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
     {
     /* 
    <TodoList todos={todos} setTodos={setTodos}/>
     {todos.map((t)=> (
        <li>{t.todo}</li>
      ))}
     */}
  
    </div>
  );
}

export default App;
