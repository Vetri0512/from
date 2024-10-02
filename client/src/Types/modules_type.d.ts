import { TextFieldVariants, Theme } from "@mui/material";
import { Form_values } from "./Inputs";
import { Variant } from "@mui/material/styles/createTypography";

export interface From_data {
    Data:  Form_values[], 
    sx?:SxProps<Theme>
}

export interface TranslateProps {
id: string, 
defalultMessage: string, 
Variant:Variant ,
sx ?:SxProps<Theme>
} 