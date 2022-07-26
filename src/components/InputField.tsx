import React, { useRef } from 'react'
import '../styles/styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:  (e: React.FormEvent) => void
}


export const InputField = ({todo, setTodo, handleAdd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {handleAdd(e) 
        inputRef.current?.blur()
      }}>
        <input className="input_box" type="input" value= {todo} 
        onChange= {(e)=> {setTodo(e.target.value)}} 
        placeholder="Enter A Task" />
        <button className="input_submit" type="submit">GO</button>
    </form>
  )
}
