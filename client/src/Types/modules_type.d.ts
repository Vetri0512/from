import { Theme } from "@mui/material";
import { Form_values } from "./Inputs";
import { Variant } from "@mui/material/styles/createTypography";

export interface From_data {
  Data: Form_values[];
  sx?: SxProps<Theme>;
  is_button?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: Record<Form_values, string>;
  error: Record<Form_values, boolean>;
  Button_disable: () => boolean;
  on_submit: () => void;
}

export interface TranslateProps {
  id: string;
  defaultMessage: string;
  Variant: Variant;
  sx?: SxProps<Theme>;
}
