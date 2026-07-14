import type { ToDoType } from "../types/todotype";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  todos:ToDoType[],
  deleteTodo: (id:number) => void,
  toggleTodo: (id:number) => void
}
const TodoList =({todos,deleteTodo,toggleTodo}: ITodoListProps)=> {
   

  return <>
   <h2 className="font-bold text-2xl text-center underline
   ">TODO List</h2>
     {todos?.length === 0  ?
     <div className="text-center font-semibold p-2 text-sm"><span >Kindly add task first Plz!!</span> </div>
        :
     todos?.map((todo)=> (
      <TodoItem  id={todo?.id} todo={todo}  deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
     ))}
  </>
}

export default TodoList;