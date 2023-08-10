import React from "react";
import { getInitials, mergeClassNames } from "../../utility";

const Avatar = ({ src, alt, style = {}, className = "", ...rest }) => {
  const acronyms = getInitials(alt).join("");
  const defaultClassName =
    "flex flex-row items-center justify-center bg-gray-500 border-0 shadow-sm";
  const imageStyle = {
    width: "100px",
    height: "100px",
    ...style,
  };

  return !src ? (
    <div
      className={mergeClassNames(defaultClassName, className)}
      style={imageStyle}
      {...rest}
    >
      <span style={{ fontSize: "360%" }}>{`${acronyms}`}</span>
    </div>
  ) : (
    <img
      className={mergeClassNames(defaultClassName, className)}
      src={src}
      alt={alt}
      style={imageStyle}
      {...rest}
    />
  );
};

export default Avatar;
