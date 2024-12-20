import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    console.log("🚀 ~ PrivateRoute ~ user:", user);
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
