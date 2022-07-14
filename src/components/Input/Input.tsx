import React, { PropsWithChildren } from "react";
import "./Button.css";

export type ButtonProps = {
  /** Disable the button */
  isDisabled?: boolean;
  /** Switch to a loading state */
  isLoading?: boolean;
  /** Maintain the active state */
  /** The shape of the button */
  isRounded?: boolean;
  padding?: string;
  backgroundColor?: string;
  textColor?: string;
};

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  padding,
  backgroundColor = "dodgerblue",
  textColor = "white",
  isDisabled,
  isLoading,
}) => {
  // const { permissions } = useMessageContext();
  return (
    <button
      className="button"
      disabled={isDisabled || isLoading}
      tabIndex={isDisabled || isLoading ? -1 : undefined}
      aria-disabled={isDisabled || isLoading}
      aria-busy={isLoading}
      style={{ backgroundColor, color: textColor, padding }}
    >
      <>{children}</>
    </button>
  );
};
