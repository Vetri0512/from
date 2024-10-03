export const OnlyChar = (val: string) => {
  const data = val.replace(/[^a-zA-Z_ ]*/g, "");
  return data;
};

export const password_validation: (val: string) => boolean = (val) => {
  let is_valid = true;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  is_valid = passwordRegex.test(val) ? true : false;
  return is_valid;
};
export const email_validation: (val: string) => boolean = (val) => {
  let is_valid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  is_valid = emailRegex.test(val) ? true : false;
  return is_valid;
};
