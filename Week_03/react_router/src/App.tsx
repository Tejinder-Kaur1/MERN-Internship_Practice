
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import ProtectedRoute from './components/protectedRoute'
import Dashboard from './pages/dashboard'
import Profile from './pages/Profile'

function App(){
  const token=localStorage.getItem("token");
  return <>
  <Routes>
    <Route path='/Login' element={token ? <Navigate to='/DashBoard' replace/>:<Login/>}/>
    <Route element={<ProtectedRoute/>}>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Profile" element={<Profile/>}/>
    </Route>
    <Route path="*" element={<Navigate to= {token? "/DashBoard" : "/Login"}replace />}/>
  </Routes>
  </>
}

export default App
