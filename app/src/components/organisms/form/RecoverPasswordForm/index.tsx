import { useEffect } from "react";
import { useAuth, useRequestPasswordChange } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../../../molecules/notification/Alert";
import InputGroup from "../../../molecules/form/InputGroup";
import { InputTypes } from "../../../atoms/form/input";
import Button from "../../../atoms/button/button";

const RecoveryPasswordForm = ({
  recoveryPassword,
  error,
}: {
  recoveryPassword: (email: string) => void;
  error?: string;
}) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    recoveryPassword(e.target.email.value);
  };
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
        <div>
          <Button type="submit">Get Recovery Link</Button>
        </div>
      </form>
      <br />
      {error && (
        <ErrorAlert
          message={{
            title: error,
            description: "That didn't worked, check your email again",
          }}
        />
      )}
    </div>
  );
};

const WithAuth = () => {
  const auth = useAuth();
  const recoveryPassword = useRequestPasswordChange();
  let navigate = useNavigate();

  useEffect(() => {
    if (auth.user !== null) {
      if (auth.user.password_change_token) {
        navigate("/change-password/" + auth.user.password_change_token);
      }
    }
  }, [auth.user, navigate]);

  return (
    <RecoveryPasswordForm
      recoveryPassword={recoveryPassword}
      error={auth && auth.error ? auth.error : undefined}
    />
  );
};

export default WithAuth;
