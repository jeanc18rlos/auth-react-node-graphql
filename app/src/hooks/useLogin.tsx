import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/auth";

// Hook to login a user
export const useLogin = () => {
  const dispatch = useDispatch();

  return (email: string, password: string) => {
    dispatch(loginUser({ email, password }));
  };
};
