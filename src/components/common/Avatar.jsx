import React from "react";
import { getInitials, mergeClassNames } from "../../utility";

const Avatar = ({ src, alt, style = {}, className = "", ...rest }) => {
  const acronyms = getInitials(alt).join("");
  const defaultClassName = "flex flex-row items-center justify-center";
  const imageStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "slategrey",
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
