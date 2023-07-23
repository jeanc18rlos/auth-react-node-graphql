import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  return user ? (
    user.access_token && user.id && <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
}
