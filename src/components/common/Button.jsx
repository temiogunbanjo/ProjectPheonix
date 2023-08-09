import React from "react";

export const Button = ({
  text,
  className = "rounded-md",
  style = {},
  href,
  ...props
}) => {
  return !href ? (
    <button
      className={className}
      style={{
        textTransform: "uppercase",
        backgroundColor: "white",
        color: "black",
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
        backgroundColor: "white",
        color: "black",
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
