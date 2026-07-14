import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../Services/FetchData';
import { IUserTypes } from '../Types/UserTypes';

function UserDetail() {
  const {id} = useParams();
  const [userDetail,setUserDetails] = useState<IUserTypes>();
  const getUserDetails = async() => {
    const response = await getUserById(id as string);
   if(response) {
    setUserDetails(response)
   }
  }
  useEffect(()=>{
    getUserDetails()
  },[id])
  return (
    <div>
        Name : {userDetail?.name}
        <br/>
        Email : {userDetail?.email}
    </div>
  )
}

export default UserDetail
