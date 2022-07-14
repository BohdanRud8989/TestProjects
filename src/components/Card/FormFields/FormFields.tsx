import React from "react";
import { Input } from "../../Input";
import { FIELDS } from "../constants/fields";

type FormFieldsProps = {
  setData: (data: Record<string, string>) => void;
  errors: Record<string, boolean>;
  data: Record<string, string>;
};

export const FormFields: React.FC<FormFieldsProps> = ({
  setData,
  errors,
  data,
}) => {
  console.log('FormFields data', data);
  return (
    <form>
      {FIELDS.map(({ type, id, label, placeholder, min }) => {
        return (
          <Input
            key={id}
            value={data[id]}
            type={type}
            id={id}
            hasError={errors[id]}
            label={label}
            placeholder={placeholder}
            min={min}
            onChange={setData}
          />
        );
      })}
    </form>
  );
};
