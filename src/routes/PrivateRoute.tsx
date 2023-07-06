import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const currentUser = true;
  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};
