import AuthTemplate, { forms } from "../templates/AuthPageTemplate";

const RecoveryPasswordPage = () => {
  return (
    <AuthTemplate
      form={forms.RESET_PASSWORD}
      headingText="Reset your Password"
      infoText="or"
      link={{
        to: "/signup",
        title: "create a new account",
      }}
    />
  );
};

export default RecoveryPasswordPage;
