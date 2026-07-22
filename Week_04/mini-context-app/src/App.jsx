import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UseAuth from "./hooks/useAuth";
import ProtectedRoutes from "./components/ProtectedRoutes/protectedRoutes";
import PublicRoutes from "./components/PublicRoutes/publicRoutes";

function App() {
  const { isAuthenticated } = UseAuth();

  return (
    <Routes>
      {/* Public routes :-  anyone can access*/}
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Privarte route :- this can be accessible only after login */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Defulat routing */}
      <Route
        path="*"
        element={
          <Navigate to={isAuthenticated ? "/profile" : "/login"} replace />
        }
      />
    </Routes>
  );
}

export default App;
