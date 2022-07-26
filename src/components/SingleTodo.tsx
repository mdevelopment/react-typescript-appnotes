
import  {Todo} from "./models/model"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import '../styles/styles.css' 
import { useEffect, useRef, useState } from "react"

type Props = {
   todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    index: Number;
}


const SingleTodo = ({todo, todos, setTodos, index}:Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };
  
  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)}  className="todos__single">
    {edit ? (
      <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos__single--text" ref={inputRef} />
    ) : todo.isdone ? ( <s className="todos__single--text">{todo.todo}</s>
    ) : ( <span className="todos__single--text">{todo.todo}</span> 
    )}
    <div>
      <span className="icon" onClick={() => { if (!edit && !todo.isdone) { setEdit(!edit); } }} >
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </div>
  </form>
  )
}

export default SingleTodo