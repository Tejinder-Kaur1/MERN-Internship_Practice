import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getListById } from "../Services/DataFetching";
import  type { IToDoListTypes } from "../Types/ToDoListTypes";

const ListDetail = () => {
  const {id}=useParams();

  const [todoItem,setTodoItems]=useState<IToDoListTypes>();

  const getTodoData= async()=>{
    const response=await getListById(id as string);
    console.log({response})
    if(response){
      setTodoItems(response);
    }
  }
  useEffect(()=>{ 
    getTodoData();
    
  },[id])

  console.log(todoItem);
  return (
    <>
      <h2>UserId is: {todoItem?.id}</h2>
      <h2>Title is:{todoItem?.title}</h2>
    </>
  )
}

export default ListDetail
