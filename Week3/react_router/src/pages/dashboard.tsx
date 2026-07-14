import { Link, useNavigate } from "react-router-dom";

const Dashboard=()=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/Login');
  }
  return<>
  <h1>Hi this is Dashboard</h1>
  <Link to='/Profile'>Profile</Link>
  <button onClick={handleLogout}>Logout</button>
  </>
}
export default Dashboard;