import type { ToDoType } from "../types/todotype";

 
interface ITodoItemProps{
  id:number,
  todo:ToDoType,
  deleteTodo:(id:number)=>void,
  toggleTodo:(id:number)=>void,
}
const TodoItem =({id,todo,deleteTodo,toggleTodo}:ITodoItemProps)=> {
  return <>
<div className=" flex justify-center gap-5 text-center  font-semibold p-2 text-sm ">
       <input type="checkbox" checked={todo?.completion_status} onChange={()=> toggleTodo(id)} className="size-5 cursor-pointer accent-pink-700 focus:outline-none"/>
       <span className={todo?.completion_status ? "line-through" :  "no-underline"}>{todo?.title}</span>
       <button onClick={()=> deleteTodo(id)} className="bg-pink-300 border w-25 rounded-full  hover:cursor-pointer">Delete Task</button>
</div>
  </>
}

export default TodoItem;