import { LinkProps, Link as RouterLink } from "react-router-dom";
import React, { HTMLProps } from "react";

const PageLink: React.FC<HTMLProps<LinkProps> & { to: string }> = ({
  children,
  to,
}) => {
  return (
    <RouterLink
      to={to}
      className="font-medium text-indigo-600 hover:text-indigo-500"
    >
      {children}
    </RouterLink>
  );
};

export default PageLink;
