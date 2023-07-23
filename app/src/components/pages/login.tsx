import AuthTemplate, { forms } from "../templates/AuthPageTemplate";

const LoginPage = () => {
  return (
    <AuthTemplate
      form={forms.SIGN_IN}
      headingText="Sign in"
      infoText="or"
      link={{
        to: "/signup",
        title: "create a new account",
      }}
    />
  );
};

export default LoginPage;
