import React, { HTMLProps } from "react";

const Label: React.FC<HTMLProps<"label">> = (props) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {props.children}
    </label>
  );
};
export default Label;
