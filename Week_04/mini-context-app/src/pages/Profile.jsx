import { useNavigate } from "react-router-dom";
import UseAuth from "../hooks/useAuth";

function Profile() {
  const navigate = useNavigate();
  const { logout } = UseAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <h1>Hi porfile</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
