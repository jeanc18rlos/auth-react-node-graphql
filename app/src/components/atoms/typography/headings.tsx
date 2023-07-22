import React, {  ReactNode } from "react";

export const H2: React.FC<{children: ReactNode}> = ({ children }) => {
  return (
    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
      {children}
    </h2>
  );
};
