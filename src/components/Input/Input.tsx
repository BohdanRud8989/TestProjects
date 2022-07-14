import React, { HTMLInputTypeAttribute } from "react";
import "./Input.css";

export type InputProps = {
  value: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  pattern?: string;
  min?: string;
  onChange: (newData: Record<string, string>) => void;
  hasError: boolean;
};

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  label,
  value,
  id,
  pattern,
  min = 0,
  onChange,
  hasError,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [id]: event.target.value });
  };

  return (
    <div className={`input-group ${hasError ? "input-group--error" : ""}`}>
      <div className="input-group__input">
        <label className="input-group__label" htmlFor={id}>
          {label}:
        </label>

        <input
          placeholder={placeholder}
          type={type}
          value={value ?? ''}
          onChange={handleChange}
          className="form-control"
          pattern={pattern}
          id={id}
          min={min}
        />
      </div>
      {hasError && <div className="input-group__alert"><span>{label} is invalid</span></div>}
    </div>
  );
};
