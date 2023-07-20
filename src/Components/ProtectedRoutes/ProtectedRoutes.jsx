import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
