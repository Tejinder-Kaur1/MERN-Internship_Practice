import { Link, useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <form>
        <div className="flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="phone number, username, or email"
            className="border-2 border-gray-400 rounded-xl w-auto p-1 hover:outline-black"
          />{" "}
          <input
            type="password"
            placeholder="password"
            className="border-2 border-gray-400 rounded-xl w-auto p-1"
          />{" "}
        </div>
        <div className="text-right">
          <Link to="/ForgotPassword">Forgot password?</Link>
        </div>
        <div className="flex flex-col items-center gap-2 mt-2">
          <button
            type="button"
            value="Log_In"
            className="bg-blue-800 text-white font-semi-bold p-2 rounded-md w-1/2 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-300"
            disabled
            onClick={handleLogin}
          >
            Log In
          </button>{" "}
          <span className="text-gray-400 mb-2">
            Don't have an account? <Link to="/SignUp"> sign up</Link>
          </span>{" "}
        </div>
      </form>
    </>
  );
};

export default Form;
