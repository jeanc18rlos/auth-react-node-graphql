import AuthTemplate, { forms } from "../templates/AuthPageTemplate";

const ChangePasswordPage = () => {
  return (
    <AuthTemplate
      form={forms.CHANGE_PASSWORD}
      headingText="Change your Password"
      infoText="or"
      link={{
        to: "/login",
        title: "login into your account",
      }}
    />
  );
};

export default ChangePasswordPage;
