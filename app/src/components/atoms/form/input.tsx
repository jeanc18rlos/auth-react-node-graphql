import { HTMLProps } from "react";

export enum InputTypes {
  PASSWORD = "PASSWORD",
  EMAIL = "EMAIL",
}

export const BaseInput = ({
  id,
  name,
  type,
  autoComplete,
  required,
}: HTMLProps<"input">) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    />
  );
};

export const PasswordInput = ({ id, name, required }: HTMLProps<"input">) => {
  return (
    <BaseInput
      id={id}
      name={name}
      type="password"
      autoComplete="current-password"
      required={required}
    />
  );
};

export const EmailInput = ({ id, name, required }: HTMLProps<"input">) => {
  return (
    <BaseInput
      id={id}
      name={name}
      required={required}
      type="email"
      autoComplete="email"
    />
  );
};
const Input: React.FC<
  HTMLProps<"input"> & {
    type: InputTypes;
  }
> = ({ type, ...rest }) => {
  switch (type) {
    case InputTypes.PASSWORD:
      return <PasswordInput {...rest} />;
    case InputTypes.EMAIL:
      return <EmailInput {...rest} />;
    default:
      return <></>;
  }
};

export default Input;
