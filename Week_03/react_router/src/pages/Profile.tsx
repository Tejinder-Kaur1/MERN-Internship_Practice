import { useNavigate } from "react-router-dom";
const Profile=()=>{
  const navigate=useNavigate();
  const handleDashboard=()=>[
    navigate('/DashBoard')
  ]
  return<>
  <h1>This is Profile!</h1>
  <button onClick={handleDashboard}>Back do DashBoard</button>
  </>
}

export default Profile;