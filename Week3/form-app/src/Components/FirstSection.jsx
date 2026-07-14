import React from "react";
import looimg from "../assets/loo.png";
import fbimg from "../assets/facebook.png";

const FirstSection = () => {
  return (
    <>
      <select name="Language" className="text-gray-400 mt-4">
        <option value="English" selected>
          English
        </option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>
      <div className="flex justify-center ">
        <img src={looimg} alt="Instagram" className="w-1/2 size-16" />{" "}
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="bg-blue-800  rounded-md w-auto p-2 cursor-pointer"
        >
          {" "}
          <img src={fbimg} alt="Fb Logo" className="w-6 inline" />{" "}
          <span className="text-white font-semi-bold ">
            Continue with Facebook
          </span>
        </button>{" "}
      </div>{" "}
    </>
  );
};

export default FirstSection;
