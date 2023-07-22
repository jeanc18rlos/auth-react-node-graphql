import { useDispatch } from "react-redux";
import { changePassword } from "../store/actions/auth";

// Hook to change a user's password
export const useChangePassword = () => {
  const dispatch = useDispatch();

  return (email: any, newPassword: any, token: any) => {
    dispatch(
      changePassword({ email, newPassword, password_change_token: token })
    );
  };
};
