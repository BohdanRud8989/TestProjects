import React from "react";

type ButtonProps = {
    text: string;
    padding: string;
    backgroundColor: string;

};

export const Button: React.FC<ButtonProps> = ({ backgroundColor }) => {
    // const { permissions } = useMessageContext();

    return <button style={{ backgroundColor }} />;
};
