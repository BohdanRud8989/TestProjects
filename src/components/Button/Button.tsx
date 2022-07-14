import React, { PropsWithChildren } from "react";
import "./Button.css";

export type ButtonProps = {
  /** Disable the button */
  isDisabled?: boolean;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  type = "submit",
  backgroundColor = "dodgerblue",
  textColor = "white",
  isDisabled,
  padding,
  margin,
}) => {
  // const { permissions } = useMessageContext();
  return (
    <button
      onClick={onClick}
      className="button"
      type={type}
      style={{ backgroundColor, color: textColor, padding, margin }}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : undefined}
      aria-disabled={isDisabled}
    >
      <>{children}</>
    </button>
  );
};
