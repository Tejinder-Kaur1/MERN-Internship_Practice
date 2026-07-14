import {ToDoType} from "../types/todo_type.ts";
export const getUsers=async(): Promise<ToDoType[]>=>{
  const response= await fetch('https://jsonplaceholder.typicode.com/todos');
  if(!response?.ok){
    throw new Error("faillllll");
  }
  const data= await response.json();
  return data;
}