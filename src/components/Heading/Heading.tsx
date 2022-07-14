import React from "react";

export type HeadingProps = {
  text: string;
};

export const Heading: React.FC<HeadingProps> = React.memo(({ text }) => {
  return (
    <header>
      <span>{text}</span>
    </header>
  );
});
