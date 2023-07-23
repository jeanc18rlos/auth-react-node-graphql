import { useParams } from "react-router-dom";
import { useAuth, useChangePassword } from "../../../../hooks";
import Button from "../../../atoms/button/Button";
import { InputTypes } from "../../../atoms/form/Input";
import InputGroup from "../../../molecules/form/InputGroup";
import { ErrorAlert } from "../../../molecules/notification/Alert";

const ChangePasswordForm = () => {
  const changePassword = useChangePassword();
  const auth = useAuth();
  const onSubmit = (e: any) => {
    e.preventDefault();
    changePassword(e.target.email.value, e.target.password.value, token);
  };
  const { token } = useParams();

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form onSubmit={onSubmit} className="space-y-6">
        <InputGroup
          label={{
            for: "email",
            text: "Email",
          }}
          input={{
            type: InputTypes.EMAIL,
            id: "email",
            name: "email",
            required: true,
          }}
        />
        <InputGroup
          label={{
            for: "password",
            text: "Password",
          }}
          input={{
            type: InputTypes.PASSWORD,
            id: "password",
            name: "password",
            required: true,
          }}
        />

        <div>
          <Button type="submit">Change Password</Button>
        </div>
      </form>
      <br />
      {auth.error && (
        <ErrorAlert
          message={{
            title: auth.error,
            description: "That didn't worked, check your email or your link",
          }}
        />
      )}
    </div>
  );
};
export default ChangePasswordForm;
