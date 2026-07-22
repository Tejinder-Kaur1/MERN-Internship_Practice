import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";

function ProtectedRoutes() {
  const { isAuthenticated } = UseAuth();
  console.log({ isAuthenticated });
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoutes;
