import { useContext } from "react";
import UserContext from "../context/authContext";

const UseAuth = () => {
  const context = useContext(UserContext);
  if (!context) throw Error("user is not authenticted");
  return context;
};

export default UseAuth;
