import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="border-2 flex justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Find your Account</h1>
          <span>
            Enter your mobile number,username or email.{" "}
            <a href="#">Can't reset your password?</a>
          </span>{" "}
          <input
            type="text "
            placeholder="Mobile number, username or email"
            className="border-2 border-gray-300 rounded-md p-1 w-2/2"
          />{" "}
          <span>
            You may receive WhatsApp and SMS notifications from us for security
            and login purposes.
          </span>
          <button className="border-2  bg-blue-800 rounded-full p-1 text-white w-2/2 text-lg cursor-pointer">
            Continue
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
