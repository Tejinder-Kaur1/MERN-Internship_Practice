import { axiosInstance } from "./axiosInstance";
import type { IToDoListTypes } from "../Types/ToDoListTypes";

export const getData=async():Promise<IToDoListTypes[]> =>{
  const { data }= await axiosInstance.get("/todos");
  return data;
}
export const getListById=async(id:string)=>{
  const {data} =await axiosInstance.get(`/todos/${id}`)
  return data
}