import { Box } from "@mui/material";
import Form_inputs from "./component/Form_inputs";
import { Form_values } from "./Types/Inputs";
import { useCallback, useEffect, useRef, useState } from "react";
import { OnlyChar } from "./Rules/rules";
import { validation } from "./Rules/validation";

const App = () => {
  const [formValues, setFormValues] = useState<Record<Form_values, string>>({
    confirm_password: "",
    email: "",
    name: "",
    password: "",
  });
  const [error, setErrors] = useState<Record<Form_values, boolean>>({
    confirm_password: false,
    email: false,
    name: false,
    password: false,
  });
  const form_data: Form_values[] = [
    "name",
    "email",
    "password",
    "confirm_password",
  ];

  useEffect(() => {
    const FromValues =
      localStorage.getItem("FromValues") ||
      JSON.stringify({
        confirm_password: "",
        email: "",
        name: "",
        password: "",
      });
    const Errors =
      localStorage.getItem("Errors") ||
      JSON.stringify({
        confirm_password: false,
        email: false,
        name: false,
        password: false,
      });
    setFormValues(JSON.parse(FromValues));
    setErrors(JSON.parse(Errors));
  }, []);

  const timerRef = useRef<unknown>(null);

  const DebounceValidations: (name: Form_values, value: string) => void =
    useCallback(
      (name, value) => {
        const timeout = 1000;

        if (timerRef.current) {
          clearTimeout(timerRef.current as number);
        }

        timerRef.current = setTimeout(() => {
          setErrors((prev) => ({
            ...prev,
            [`${name}`]: !validation(name, value, formValues),
          }));
          localStorage.setItem(
            "Errors",
            JSON.stringify({
              ...error,
              [`${name}`]: !validation(name, value, formValues),
            })
          );
        }, timeout);
      },
      [formValues, error]
    );

  const handleFromValues: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = useCallback(
    (event) => {
      // eslint-disable-next-line prefer-const
      let { name, value } = event.target;
      value = name == "name" ? OnlyChar(value) : value;
      localStorage.setItem(
        "FromValues",
        JSON.stringify({ ...formValues, [`${name}`]: value })
      );
      setFormValues((prev) => ({ ...prev, [`${name}`]: value }));
      DebounceValidations(name as Form_values, value);
    },
    [DebounceValidations, formValues]
  );
  const handle_button_disable: () => boolean = useCallback(() => {
    return !(
      Object.values(formValues).every((e) => e.length > 1) &&
      Object.values(error).every((e) => !e)
    );
  }, [formValues, error]);

  const handleOnSubmit: () => void = useCallback(() => {
    alert("form success full Submitted");
    setErrors({
      confirm_password: false,
      email: false,
      name: false,
      password: false,
    });
    setFormValues({
      confirm_password: "",
      email: "",
      name: "",
      password: "",
    });
    localStorage.setItem(
      "FromValues",
      JSON.stringify({
        confirm_password: "",
        email: "",
        name: "",
        password: "",
      })
    );
    localStorage.setItem(
      "Errors",
      JSON.stringify({
        confirm_password: "",
        email: "",
        name: "",
        password: "",
      })
    );
  }, []);

  return (
    <Box>
      <Form_inputs
        Data={form_data}
        sx={{ width: "25%" }}
        is_button
        onChange={handleFromValues}
        value={formValues}
        error={error}
        Button_disable={handle_button_disable}
        on_submit={handleOnSubmit}
      />
    </Box>
  );
};

export default App;
