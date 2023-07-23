import { useEffect } from "react";
import { useAuth, useLogin } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { ErrorAlert } from "../../../molecules/notification/Alert";
import InputGroup from "../../../molecules/form/InputGroup";
import { InputTypes } from "../../../atoms/form/Input";
import Link from "../../../atoms/link/Link";
import Button from "../../../atoms/button/Button";

const SignInForm = ({
  login,
  error,
}: {
  login: (email: string, password: string) => void;
  error?: string;
}) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    login(e.target.email.value, e.target.password.value);
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
        <div className="flex items-center justify-between">
          <Link to={"/reset-password"}>Forgot your password?</Link>
        </div>

        <div>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
      <br />
      {error && (
        <ErrorAlert
          message={{
            title: error,
            description: "That didn't worked, check your email and password",
          }}
        />
      )}
    </div>
  );
};

const WithAuth = () => {
  const auth = useAuth();

  const login = useLogin();
  let navigate = useNavigate();

  useEffect(() => {
    if (auth.user !== null) {
      if (auth.user.access_token) {
        navigate("/");
      }
    }
  }, [auth.user, navigate]);

  return (
    <SignInForm
      login={login}
      error={auth && auth.error ? auth.error : undefined}
    />
  );
};

export default WithAuth;
