import { InputProps } from "../../Input/Input";

export const FIELDS: (Omit<InputProps, "value" | "hasError" | "onChange"> & {
  isValid: (value: string) => boolean;
})[] = [
  {
    type: "text",
    id: "name",
    label: "Name",
    placeholder: "Name",
    isValid: (name: string) =>
      !!name && (name.match(/\W|\d/g) || []).length === 0,
  },

  {
    type: "text",
    id: "surname",
    label: "Surname",
    placeholder: "Surname",
    isValid: (surname: string) =>
      !!surname && (surname.match(/\W|\d/g) || []).length === 0,
  },
  {
    type: "text",
    id: "email",
    label: "Email",
    placeholder: "Email",
    isValid: (email: string) =>
      !!email && (email.match(/@/g) || []).length > 0,
  },
  {
    type: "number",
    id: "age",
    label: "Age",
    placeholder: "Age",
    min: "1",
    isValid: (age: string) => !!age && Number(age) >= 1,
  },
  {
    type: "text",
    id: "color",
    label: "Favorite color",
    placeholder: "Favorite color",
    isValid: (color: string) =>
      !!color && (color.match(/\W|\d/g) || []).length === 0,
  },
];

export const FIELDS_OPTIONS = FIELDS.reduce((prevFields, { id, isValid }) => {
  prevFields[id] = { isValid };
  return prevFields;
}, {} as Record<string, { isValid: (value: string) => boolean }>);

export const FIELDS_DEFAULT_VALUES = FIELDS.reduce((prevFields, { id }) => {
  prevFields[id] = "";
  return prevFields;
}, {} as Record<string, string>);
