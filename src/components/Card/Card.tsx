import React from "react";

type CardProps = { backgroundColor: string };

export const Card: React.FC<CardProps> = ({ backgroundColor }) => {
  // const { permissions } = useMessageContext();

  return <div style={{ backgroundColor }} />;
};
