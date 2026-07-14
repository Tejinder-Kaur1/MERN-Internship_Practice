import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center border-2">
        <div className=" flex flex-col w-1/2 gap-y-1">
          <h1 className="font-bold text-2xl">Get started on Instagram</h1>
          <label for="name " className="font-semibold">
            Mobile number or email
          </label>
          <input
            type="tel"
            placeholder="Mobile number or email"
            id="name"
            className="border-2 border-gray-300 rounded-md p-1 w-1/2"
          />
          <label for="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="border-2 border-gray-300 rounded-md p-1 w-1/2"
          />

          <label className="font-semibold">Birthday </label>
          <div className=" flex justify-evenly">
            <select
              name="month"
              className="border-2 border-gray-300 rounded-md p-1"
            >
              <option value="Month " selected>
                Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>{" "}
            </select>
            <select
              name="Day"
              className="border-2 border-gray-300 rounded-md p-1"
            >
              <option value="Month " selected>
                Day
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select
              name="year"
              className="border-2 border-gray-300 rounded-md p-1"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>{" "}
          </div>
          <label for="fullName" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Full Name"
            className="border-2 border-gray-300 rounded-md p-1 w-1/2"
          />
          <label for="userName" className="font-semibold">
            {" "}
            Username
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Username"
            className="border-2 border-gray-300 rounded-md p-1 w-1/2"
          />
          <span className="font-light">
            People who use our service may have uploaded your contact
            information to Instagram.
            <a href="#" className="text-blue-500  cursor-pointer font-semibold">
              Learn more
            </a>
            .<br /> By tapping Submit, you agree to create an account and to
            Instagram's{" "}
            <a href="#" className="text-blue-500  cursor-pointer font-semibold">
              Terms
            </a>
            ,
            <a href="#" className="text-blue-500 cursor-pointer font-semibold">
              Privacy Policy
            </a>
            and{" "}
            <a href="#" className="text-blue-500 cursor-pointer font-semibold">
              Cookies Policy
            </a>
            . <br />
            The{" "}
            <a href="#" className="text-blue-500 cursor-pointer font-semibold">
              Privacy Policy{" "}
            </a>
            describes the ways we can use the information we collect when you
            create an account. For example, we use this information to provide,
            personalize and improve our products, including ads.
          </span>
          <button
            type="submit"
            className="border-2  bg-blue-800 rounded-full p-1 text-white w-2/2 cursor-pointer text-lg"
          >
            Submit
          </button>
          <button className="border-2 border-gray-300 rounded-md p-1 cursor-pointer text-gray-400">
            I already have an account
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
