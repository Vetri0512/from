import { Typography } from "@mui/material";
import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TranslateProps } from "../Types/modules_type";

const Translate: FC<TranslateProps> = ({ defaultMessage, id, Variant, sx }) => {
  return (
    <Typography variant={Variant} sx={{ ...sx }}>
      <FormattedMessage defaultMessage={defaultMessage} id={id} />
    </Typography>
  );
};

export default Translate;
