import React, { HTMLProps } from "react";
import Label from "../../atoms/form/Label";
import Input, { InputTypes } from "../../atoms/form/Input";

interface InputGroupProps {
  label: {
    for: string;
    text: string;
  };
  input: {
    type: InputTypes;
  } & HTMLProps<"input">;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, input }) => {
  return (
    <div>
      <Label htmlFor={label.for}>{label.text}</Label>
      <div className="mt-1">
        <Input {...input} />
      </div>
    </div>
  );
};

export default InputGroup;
