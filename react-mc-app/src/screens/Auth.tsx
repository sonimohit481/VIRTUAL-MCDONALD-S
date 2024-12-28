import { Navigate } from "react-router-dom";
import { AuthForm } from "../components";
import { useAuth } from "../context/AuthContext";

const Auth = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/products" />;
  }

  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default Auth;
