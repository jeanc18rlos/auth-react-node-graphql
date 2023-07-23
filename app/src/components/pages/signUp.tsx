import SignUpTemplate, { forms } from "../templates/AuthPageTemplate";

const SignUpPage = ({}) => {
  return (
    <SignUpTemplate
      form={forms.SIGN_UP}
      headingText="Sign up"
      infoText="or"
      link={{
        to: "/login",
        title: "Login into your account",
      }}
    />
  );
};

export default SignUpPage;
