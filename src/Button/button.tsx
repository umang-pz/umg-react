import React, { forwardRef } from "react";
import "./button.scss";

export interface ButtonProps extends React.ComponentProps<"button"> {
  kind?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind = "primary", ...props }, ref) => {
    return (
      <button data-button={`kind:${kind}`} ref={ref} {...props}>
        CLICK ME
      </button>
    );
  }
);
