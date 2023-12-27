import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[11px]" };
const variants = {
  outline: {
    white_A700_dd:
      "bg-gradient  border-2 border-solid border-white-A700_dd shadow-bs text-white-A700",
  },
  fill: { purple_900: "bg-purple-900 text-gray-100" },
};
const sizes = { xs: "pl-[7px] pr-[9px] py-[9px]", sm: "p-2.5", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "purple_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700_dd", "purple_900"]),
};

export { Button };
