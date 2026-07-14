import { User } from "../Types/UserData";
export const getUsers =  async():Promise<User[]>  => {        
  const response = await fetch('https://dummyjson.com/users?limit=10');
  if(!response?.ok){
    throw new Error("Failed to fetch the users");
  }
  const data:User[] = await response.json();
  return data;
}
