import React from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../Services/api";
import Accordian from "./Accordian";
const Cards = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sections = [
    { id: "address", content: "Address" },
    { id: "company", content: "Company" },
    { id: "bank", content: "Bank" },
  ];

  async function loadUsers() {
    try {
      const response = await getUsers();
      if (response && response?.total) {
        setUserData(response?.users);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
          {" "}
        </div>
      </div>
    );
  }
  console.log("App rendered");
  console.log(sections);
  return (
    <>
      <div className=" bg-pink-300  ">
        <h1 className="text-center font-bold   text-white! h-full w-full mb-0">
          API DATA
        </h1>{" "}
      </div>
      <div className="flex flex-wrap justify-around  bg-purple-300  border-blue-400">
        {userData?.map((user) => (
          <div
            key={user?.id}
            className="  border-pink-200 border-2 p-4 m-4 w-130 bg-pink-100 "
          >
            <img
              src={user?.image}
              alt="Text"
              className="border-2  border-purple-200 "
            />
            <h4>
              Name is: {user?.firstName} {user?.maidenName}{" "}
              {user?.lastName}{" "}
            </h4>
            <h4>Age is: {user?.age}</h4>
            <h4>Email is: {user?.email}</h4>
            <h4>Phone is: {user?.phone}</h4>

            <div className="accordion" id={`accordion-${user.id}`}>
              {sections.map((section) => (
                <Accordian key={section.id} section={section} user={user} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
