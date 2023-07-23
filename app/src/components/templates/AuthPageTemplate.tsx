import Container from "../atoms/layout/Container";
import FormHeading, { FormHeadingProps } from "../molecules/form/FormHeading";
import SignUpForm from "../organisms/form/signUpForm";
import SignInForm from "../organisms/form/SignInForm";
import RecoveryPasswordForm from  "../organisms/form/RecoverPasswordForm";
import ChangePasswordForm from "../organisms/form/ChangePasswordForm";

export enum forms {
  "SIGN_IN",
  "SIGN_UP",
  "RESET_PASSWORD",
  "CHANGE_PASSWORD",
}

interface withFormProps {
  form: forms;
}

type ComponentWithForm<T = {}> = React.FC<withFormProps & T>;

const FormComponent: ComponentWithForm = ({ form }) => {
  switch (form) {
    case forms.SIGN_IN:
      return <SignInForm />;
    case forms.SIGN_UP:
      return <SignUpForm />;
    case forms.RESET_PASSWORD:
      return <RecoveryPasswordForm />
    case forms.CHANGE_PASSWORD:
      return <ChangePasswordForm/>
    default:
      return <></>;
  }
};

const SignUpTemplate: ComponentWithForm<FormHeadingProps> = ({
  form,
  headingText,
  infoText,
  link,
}) => {
  return (
    <Container>
      <FormHeading headingText={headingText} infoText={infoText} link={link} />
      <FormComponent form={form} />
      
    </Container>
  );
};

export default SignUpTemplate;
