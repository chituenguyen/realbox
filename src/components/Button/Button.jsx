/* eslint-disable react/prop-types */

import "./style.scss";

const Button = ({
  className,
  name,
  onClick,
  bheight,
  fz,
  children,
  outline,
  bg,
  color,
  disabled,
  padding,
  borderColor,
  cursorValue,
  type,
  bwidth,
  radius
}) => {
  return (
    <>
      <button
        className={`button ${className ? className : ""} ${
          disabled && "disabled"
        }`}
        onClick={onClick}
        style={{
          borderRadius: radius ? radius :"",
          width: bwidth ? `${bwidth}` : "",
          height: bheight ? `${bheight}` : "",
          fontSize: fz ? fz : "",
          outline: outline ? outline : "",
          backgroundColor: bg ? bg : "",
          color: color,
          padding: padding ? padding : "",
          border: borderColor
            ? `1px solid ${borderColor}`
            : "1px solid #00b074",
          cursor: cursorValue ? cursorValue : "pointer",
        }}
        type={type ? type : "submit"}
      >
        <p>{name}</p>
        {children}
      </button>
    </>
  );
};

export default Button;