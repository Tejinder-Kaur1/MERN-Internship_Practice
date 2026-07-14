import { IUserTypes } from "../Types/UserTypes";
import { axiosInstance } from "./axiosInstance";

export const getUsers=async():Promise<IUserTypes[]>=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  if(!response?.ok){
    throw new Error("Failed to fetch");
  }
const data=await response.json();
  return data;
}

export const getUserById = async (id:string) => {
  const { data } = await axiosInstance.get(`/users/${id}`)
  return data;
}
export const deleteUserByID=async(id:string)=>{
  const {data}=await axiosInstance.delete(`/users/${id}`)
  return data
}

export const createUser=async(payload : {id:string,name:string,email:string})=>{
  const {data}=await axiosInstance.post(`/users`,{payload})
  return data
}
// put,patch,post
// post :- create
// put :- user :- id :  data
// patch :- user : -id : address : - city

// export const getUserById = async(id:string) => {
//   const response = await
// }

