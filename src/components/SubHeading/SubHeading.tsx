import React from "react";

export type SubHeadingProps = {
  text: string;
};

export const SubHeading: React.FC<SubHeadingProps> = React.memo(({ text }) => {
  return (
    <article>
      <h4>{text}</h4>
    </article>
  );
});
