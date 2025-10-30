// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("tm_token"); // check if user is logged in

  if (!token) {
    return <Navigate to="/login" replace />; // redirect to login if no token
  }

  return children; // allow access if token exists
}

export default ProtectedRoute;
