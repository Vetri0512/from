import { Form_values } from "../Types/Inputs";
import { email_validation, password_validation } from "./rules";

export const validation: (
  name: Form_values,
  value: string,
  formValue?: Record<Form_values, string>
) => boolean = (name, value, formValue) => {
  let is_error: boolean = false;
  if (name == "name") {
    is_error = value.length > 5 ? true : false;
  } else if (name == "email") {
    is_error = email_validation(value);
  } else if (name == "password") {
    is_error = password_validation(value) && value?.length >= 8;
  } else if (name == "confirm_password") {
    is_error = password_validation(value) && formValue?.password == value;
  }
  return is_error;
};

export const Error_messages: (
  name: Form_values,
  value: string,
  error: boolean
) => string = (name, value, error) => {
  const error_msg: Record<Form_values, string> = {
    name: "Name should have  minimum 6 letters",
    email: "Invalid Email",
    password: "please check the password",
    confirm_password: "please check the password",
  };

  if (error) {
    if (value?.length == 0) {
      return "field is required ";
    } else {
      return error_msg?.[`${name}`];
    }
  } else {
    return "";
  }
};
