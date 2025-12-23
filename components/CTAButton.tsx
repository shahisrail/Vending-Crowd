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
        px-8 py-4
        rounded-full
        text-white font-semibold text-lg
        bg-gradient-to-b from-indigo-400 to-indigo-700
        shadow-lg
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
        active:scale-95
        ${className || ""}
      `}
    >
      <span>{children}</span>

      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default CTAButton;
