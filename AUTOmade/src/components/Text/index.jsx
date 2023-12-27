import React from "react";

const sizeClasses = {
  txtBarlowThinItalic25: "font-barlow font-light italic",
  txtBarlowRegular17: "font-barlow font-normal",
  txtNotoSansRegular23: "font-normal font-notosans",
  txtBarlowBold45: "font-barlow font-bold",
  txtNotoSansRegular23Purple600: "font-normal font-notosans",
  txtBarlowBold55: "font-barlow font-bold",
  txtOpenSansRomanSemiBold30: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold25: "font-opensans font-semibold",
  txtBarlowBold40: "font-barlow font-bold",
  txtBarlowBold60: "font-barlow font-bold",
  txtBarlowMediumItalic40: "font-barlow font-medium italic",
  txtOpenSansRomanSemiBold2591: "font-opensans font-semibold",
  txtImpact17259: "font-impact font-normal",
  txtOpenSansRomanSemiBold2523: "font-opensans font-semibold",
  txtMontserratRegular24: "font-montserrat font-normal",
  txtBarlowLightItalic35: "font-barlow font-light italic",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtNotoSansRegular18: "font-normal font-notosans",
  txtBarlowRegular20: "font-barlow font-normal",
  txtNotoSansRegular36: "font-normal font-notosans",
  txtOpenSansRomanSemiBold2627: "font-opensans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
