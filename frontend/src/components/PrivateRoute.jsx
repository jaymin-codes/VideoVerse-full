import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const { user } = useSelector((state) => state.user);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
