import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="py-3 block px-4 rounded-lg bg-primary-400 hover:bg-primary-300 text-white text-sm font-bold"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
