import { useNavigate } from "react-router-dom";
import { useAuth, useRegister } from "../../../../hooks";
import { useEffect } from "react";
import Button from "../../../atoms/button/Button";
import { InputTypes } from "../../../atoms/form/Input";
import InputGroup from "../../../molecules/form/InputGroup";
import { ErrorAlert } from "../../../molecules/notification/Alert";
import Link from "../../../atoms/link/Link";

const SignUpForm = () => {
  const register = useRegister();
  const auth = useAuth();
  const onSubmit = (e: any) => {
    e.preventDefault();
    register(e.target.email.value, e.target.password.value);
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (auth.user !== null) {
      navigate("/login");
    }
  }, [auth.user]);
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
        <Button type="submit">Sign up</Button>
      </div>
    </form>
    <br />
    {auth.error && (
      <ErrorAlert
        message={{
          title: auth.error,
          description: "That didn't worked, check your email and password",
        }}
      />
    )}
  </div>
  );
};
export default SignUpForm;
