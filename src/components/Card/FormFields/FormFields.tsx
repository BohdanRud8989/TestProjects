import React, { useCallback, useRef, useState } from "react";
import "./Card.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";

type CardProps = { backgroundColor?: string; onAddUser: (user: any) => void };

export const Card: React.FC<CardProps> = ({ backgroundColor, onAddUser }) => {
  const inputRef = useRef(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    debugger;
    onAddUser(event);
    //TODO call parent to add new user into
  };
  const clearForm = () => {
    setErrors([]);
  };

  const setErrorCallback = useCallback(
    (error: string) => setErrors((errors: string[]) => [...errors, error]),
    [setErrors]
  );

  return (
    <section className="user-card" style={{ backgroundColor }}>
      <div>
        <Heading text="This is the test project for LRM Products"></Heading>
        <SubHeading text="Project created using the create-react-app utility script"></SubHeading>
      </div>
      <form onSubmit={handleSubmit} className="user-card__form">
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="Name"
          /*inputRef={inputRef}*/
          onError={setErrorCallback}
        />
        <Input
          type="text"
          id="surname"
          label="Surname"
          placeholder="Surname"
          /* inputRef={inputRef}*/
          onError={setErrorCallback}
        />
        <Input
          type="text"
          id="email"
          label="Email"
          placeholder="Email"
          /* inputRef={inputRef}*/
          onError={setErrorCallback}
        />
        <Input
          type="number"
          id="age"
          label="Age"
          placeholder="Age"
          min={1}
          /*inputRef={inputRef}*/
          onError={setErrorCallback}
        />

        <Input
          type="color"
          id="color"
          label="Favorite color"
          placeholder="Favorite color"
          /*  inputRef={inputRef}*/
          onError={setErrorCallback}
        />

        <Input
          type="radio"
          id="male"
          label="Male"
          /*inputRef={inputRef}*/
          onError={setErrorCallback}
        />

        <Input
          type="radio"
          id="female"
          label="Female"
          /*inputRef={inputRef}*/
          onError={setErrorCallback}
        />
      </form>
      <div className="user-card__form__footer">
        <Button
          onClick={() => clearForm()}
          backgroundColor="red"
          textColor="white"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          isDisabled={errors.length > 0} // TODO all fields must be filled in
          margin="0 20px 0 0"
          backgroundColor="green"
          textColor="lightyellow"
        >
          Submit
        </Button>
      </div>
    </section>
  );
};
