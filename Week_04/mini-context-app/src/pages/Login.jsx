import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

function Login() {
  const { isAuthenticated, login } = UseAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    // setUser({nme,pass})
    navigate("/profile");
  };
  console.log(isAuthenticated, "SEE IF user is auth");
  return (
    <div>
      <input
        placeholder="userName"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
      />
      <input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}

export default Login;
