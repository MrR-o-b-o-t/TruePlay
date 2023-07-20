import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, userData }) {
  return userData ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
