"use client";
import React from "react";

type CTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconSrc?: string;
};

const CTAButton = ({ children, iconSrc, className, ...props }: CTAButtonProps) => {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center gap-3
        rounded-full
        transition-all duration-300
        hover:scale-105 active:scale-95
        ${className || ""}
      `}
    >
      <span>{children}</span>
      {iconSrc && <img src={iconSrc} alt="" className="w-5 h-5" />}
    </button>
  );
};

export default CTAButton;
