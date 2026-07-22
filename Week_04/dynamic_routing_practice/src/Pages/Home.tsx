import  { useEffect, useState } from 'react'
import { getData } from '../Services/DataFetching';
import type { IToDoListTypes } from '../Types/ToDoListTypes';
import { Link } from 'react-router-dom';


const Home = () => {
  const [todoLists,setTodoList]=useState<IToDoListTypes[]>([]);
  const[loading,setLoading]=useState(true);
const loadList= async()=>{
const response=await getData();
if(response){
  setTodoList(response);
  setLoading(false)
}
// 
}

console.log(todoLists )
useEffect(()=>{
  loadList();
},[])

if(loading) {
  return <>Loading...............</>
}
  return (
    <>
     {todoLists.map((todoList)=>(
      <div key={todoList?.id}>
<h1>Id is:{todoList.id}</h1>

<Link to ={`/todos/${todoList?.id}`}>View Detail of Each Item </Link>
</div>
        ))}
    </>
  )
}

export default Home
