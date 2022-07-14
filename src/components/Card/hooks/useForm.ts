import { useCallback, useEffect, useState } from "react";

export const useForm = (
  fields: Record<string, { isValid: (value: string) => boolean }>
) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [data, setData] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setDataCallback = useCallback(
    (newData: Record<string, string>, replace: boolean = false): void =>
      setData((currentData: Record<string, string>) => {
        return {
          ...(replace ? {} : currentData),
          ...newData,
        };
      }),
    [setData]
  );

  const setErrorsCallback = useCallback(
    (errors: Record<string, boolean>): void => setErrors(errors),
    [setErrors]
  );

  const validateFormCallback = useCallback(
    (data: Record<string, string>): Record<string, boolean> => {
      const errors = Object.entries(data).reduce((prevData, [key, value]) => {
        if (!fields[key].isValid(value)) {
          prevData[key] = true;
        }
        return prevData;
      }, {} as Record<string, boolean>);
      return errors;
    },
    [fields]
  );

  const areAllFieldsFilledIn = (
    fields: Record<string, { isValid: (value: string) => boolean }>,
    data: Record<string, string>
  ): boolean => Object.keys(fields).every((key: string) => !!data[key]);

  useEffect(() => {
    if (data && !Object.entries(data).every(([, value]) => value === "")) {
      const errors = validateFormCallback(data);
      setErrors(errors);
    }
  }, [data, setErrors, validateFormCallback]);

  useEffect(() => {
    if (Object.keys(errors).length > 0 || !areAllFieldsFilledIn(fields, data)) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [errors, fields, data, setIsFormValid]);

  return {
    errors,
    setErrors: setErrorsCallback,
    data,
    setData: setDataCallback,
    isFormValid,
  };
};
