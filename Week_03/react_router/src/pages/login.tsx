import { useState } from "react";
import {useNavigate } from "react-router-dom";

const Login=()=>{
  const navigate=useNavigate();
    const [user,setUser]=useState('');
  const handleSubmit=()=>{
  
    if(user){
      localStorage.setItem("token",'Successful');
      navigate('/Dashboard');
    }
  }
  return <>
  <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}placeholder="ENter name" id="name"/>
  <button type="submit" onClick={handleSubmit}>Submit</button>
  </>
}
export default Login;