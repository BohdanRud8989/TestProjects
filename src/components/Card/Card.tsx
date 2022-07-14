import React from "react";
import "./Card.css";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";
import { FormFields } from "./FormFields";
import { useForm } from "./hooks/useForm";
import { FIELDS_OPTIONS } from "./constants/fields";

type CardProps = {
  backgroundColor?: string;
  onAddUser: (user: Record<string, string>) => void;
};

export const Card: React.FC<CardProps> = ({ backgroundColor, onAddUser }) => {
  const { errors, setErrors, data, setData, isFormValid } =
    useForm(FIELDS_OPTIONS);

  const clearForm = () => {
    debugger;
    setData({}, true);
    setErrors({});
  };

  const handleSubmit = () => {
    debugger;
    if (isFormValid) {
      onAddUser(data);
      clearForm();
    }
  };

  return (
    <section className="user-card" style={{ backgroundColor }}>
      <div>
        <Heading text="This is the test project for LRM Products"></Heading>
        <SubHeading text="Project created using the create-react-app utility script"></SubHeading>
      </div>
      <FormFields errors={errors} data={data} setData={setData} />
      <div className="user-card__form__footer">
        <Button
          onClick={() => clearForm()}
          backgroundColor="red"
          textColor="white"
        >
          Cancel
        </Button>
        <Button
          onClick={() => handleSubmit()}
          isDisabled={!isFormValid}
          margin="0 20px 0 0"
          backgroundColor="#04a104"
          textColor="lightyellow"
        >
          Submit
        </Button>
      </div>
    </section>
  );
};
