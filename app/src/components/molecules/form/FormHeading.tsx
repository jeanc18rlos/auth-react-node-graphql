import { H2 } from "../../atoms/typography/headings";
import Link from "../../atoms/link/link";

export interface FormHeadingProps {
  headingText: string;
  infoText: string;
  link?: {
    to: string;
    title: string;
  };
}
const FormHeading: React.FC<FormHeadingProps> = ({
  headingText,
  infoText,
  link,
}) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <H2>{headingText}</H2>
      <div className="mt-2 text-center">
        {infoText} {link && <Link to={link.to}>{link.title}</Link>}
      </div>
    </div>
  );
};

export default FormHeading;
