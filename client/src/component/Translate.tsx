import {  Typography } from "@mui/material"
import { FC } from "react"
import {FormattedMessage} from "react-intl"
import { TranslateProps } from "../Types/modules_type"

const Translate:FC <TranslateProps>= ({defalultMessage, id,Variant,sx}) => {
  return (
    <Typography variant={Variant} sx={{...sx}} >
        <FormattedMessage defaultMessage={defalultMessage} id={id} />
    </Typography>
  )
}

export default Translate