import "./App.css";

import Form from "./Components/Form";
import FirstSection from "./Components/FirstSection";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <>
      <div className="flex flex-col justify-around items-center h-screen bg-linear-[140deg,blue_5%,purple_15%,pink_35%,orange_70%,yellow_90%] ...">
        <div className="flex flex-col justify-around items-center gap-5 w-100  bg-white rounded-xl shadow-lg shadow-gray-600/70">
          <FirstSection />
          <div className="flex gap-7 items-center text-gray-400 ">
            <div className="w-20 border-b-2 border-gray-400"></div>
            <span> OR </span>
            <div className="w-20 border-b-2 border-gray-400"></div>{" "}
          </div>
          <div className="flex justify-center">
            <Form />
          </div>{" "}
        </div>{" "}
      </div>
      <Routes>
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;

// context api
// dynamic routing

// difft of routing
// pagignation, nested routing :- /dashbobord/porfile/user
