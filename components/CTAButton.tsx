"use client";

import clsx from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type CTAButtonProps = PropsWithChildren<
  {
    iconSrc?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

const CTAButton = ({
  iconSrc,
  className,
  children,
  type = "button",
  ...buttonProps
}: CTAButtonProps) => {
  const iconPath = iconSrc && (iconSrc.startsWith("/") ? iconSrc : `/${iconSrc}`);

  return (
    <button
      type={type}
      className={clsx("_ctaButton_7kf3y_1", className)}
      {...buttonProps}
    >
      <p>{children}</p>
      {iconPath ? (
        <img src={iconPath} alt="" />
      ) : null}
    </button>
  );
};

export default CTAButton;
