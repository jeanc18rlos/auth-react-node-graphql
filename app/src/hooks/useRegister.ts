import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/auth";

// Hook to register a user
export const useRegister = () => {
  const dispatch = useDispatch();

  return (email: any, password: any) => {
    dispatch(registerUser({ email, password }));
  };
};
