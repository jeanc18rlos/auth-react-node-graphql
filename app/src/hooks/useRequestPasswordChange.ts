import { useDispatch } from "react-redux";
import { requestPasswordChange } from "../store/actions/auth";

// Hook to request a password change

export const useRequestPasswordChange = () => {
  const dispatch = useDispatch();

  return (email: any) => {
    dispatch(requestPasswordChange({ email }));
  };
};
