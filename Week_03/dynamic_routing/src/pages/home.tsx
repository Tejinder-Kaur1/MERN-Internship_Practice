import React, { useEffect, useState } from 'react'
import { deleteUserByID, getUsers } from '../Services/FetchData';
import { IUserTypes } from '../Types/UserTypes';
import { Link } from 'react-router-dom';

function Home() {

  const [users, setUsers] = useState<IUserTypes[]>([]);
    const loadUsers = async () => {
      const response = await getUsers();
      if (response) {
        setUsers(response);
      }
      console.log(response);
    };
  
    useEffect(() => {
      loadUsers();
    }, []);

    const handleDelete = async (id:string) => {
      if(id){
        const response = await deleteUserByID(id)
        console.log(response);
         loadUsers();
      }
    }
  return (
    <div>
       <button>Create a user</button>
            {users?.map((user) => (
              <div key={user?.id}>
                <h4>Hi this is {user?.name}</h4>
                <button onClick={()=>handleDelete(user?.id)}>Delete</button>
                <button>Update user</button>
                <button>Update user's userName</button>
                <Link to={`/user/${user?.id}`}>View details of this user</Link>
              </div>
            ))}
    </div>
  )
}

export default Home
