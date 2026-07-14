import { useState } from "react";

interface ITodoFormProps {
  addTodo: (text:string) => void
}

const TodoForm =({addTodo}: ITodoFormProps)=> {

   const [task,setTask] = useState('');
     
   const handleSubmit = () => {
    if(!task?.trim()) return;
      
    addTodo(task?.trim());
    setTask('');
   }

  return (
  <> <div className="flex gap-2 px-2 py-2">
    <input type="text" placeholder="Enter todo task here" value={task} onChange={(e)=> setTask(e.target.value)} className="border rounded-full p-2 focus:outline-none"/>
    <button type="submit" onClick={handleSubmit} className="bg-pink-300 border w-25 rounded-full  hover:cursor-pointer">Add</button>
    </div>
  </>
  )
}

export default TodoForm;