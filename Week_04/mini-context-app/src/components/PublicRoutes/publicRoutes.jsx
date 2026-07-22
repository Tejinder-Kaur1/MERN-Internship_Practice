import UseAuth from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
  const { isAuthenticated } = UseAuth();
  if (isAuthenticated) return <Navigate to="/profile" replace />;
  return <Outlet />;
}

export default PublicRoutes;
