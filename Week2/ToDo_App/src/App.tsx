import { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import type { ToDoType } from './types/todotype';

function App() {
   
  const [todos,setTodos] = useState<ToDoType[]>([]);
    
  const addTodo = (text:string) => {
     
    const newTodo : ToDoType = {
      id: Date.now(),
      title : text,
      completion_status: false,
    }
    setTodos((prev)=> [...prev,newTodo])
  };

  const deleteTodo = (id:number) => {
    setTodos((prev)=> prev.filter((todo)=> todo?.id !== id));
  };

  const toggleTodo = (id:number) => {
    setTodos((prev)=>
    prev.map((todo)=> todo?.id === id ? {...todo, completion_status: !todo?.completion_status} : todo))
  };

  return (
   <>
    <div className= "flex items-center justify-center h-screen  bg-[url('./assets/wallpaper.jpg')] bg-contain  shadow-2xl shadow-black/30">
    <div className='border border-pink-600 bg-pink-200  text-pink-600  w-auto h-1/2 flex flex-col justify-around rounded-xl'>
      <h1 className='font-bold text-3xl text-center '>TODO App</h1> 
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </div> </div>
   </>
  )
}

export default App
