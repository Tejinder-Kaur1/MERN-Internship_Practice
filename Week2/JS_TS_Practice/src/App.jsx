import { useState, useEffect } from "react";
import { getUsers } from "./services/api";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const response = await getUsers();
      if (response) {
        console.log(response);
        // setUserData(response.ToDoType);
        setUserData(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadUser();
  }, []);
  console.log(userData);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
          {" "}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-5xl text-center font-bold ">To Do API</h1>
      <div className=" flex flex-wrap justify-around">
        {userData?.map((user) => (
          <div
            className=" h-auto w-55 border-4 solid black p-2 mt-5 mb-5 font-semi-bold font-mono"
            key={user.id}
          >
            <h2 className="bg-amber-200">The UserID is: {user.userId} </h2>
            <p> Second Id is:{user.id}</p>
            <p>Title is {user.title} </p>
            <p>
              The work completion result is:
              {user.completed ? " Completed" : " Not Completed"}{" "}
            </p>{" "}
            <br></br>
          </div>
        ))}{" "}
      </div>{" "}
    </>
  );
}

export default App;
