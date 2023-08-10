import React from "react";

export const Button = ({
  text,
  className = "rounded-md text-black bg-white",
  style = {},
  href,
  ...props
}) => {
  return !href ? (
    <button
      className={className}
      style={{
        textTransform: "uppercase",
        padding: "12px 24px",
        letterSpacing: "1px",
        fontWeight: 500,
        ...style,
      }}
      {...props}
    >
      {text}
    </button>
  ) : (
    <a
      href={href}
      className={className}
      style={{
        textAlign: "center",
        textTransform: "uppercase",
        padding: "12px 24px",
        letterSpacing: "1px",
        fontWeight: 500,
        ...style,
      }}
      {...props}
    >
      {text}
    </a>
  );
};
