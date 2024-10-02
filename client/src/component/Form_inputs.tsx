import { FC } from "react"
import { From_data } from "../Types/modules_type"
import { Box, TextField } from "@mui/material"
import { Form_values } from "../Types/Inputs"
import Translate from "./Translate"

const Form_inputs :FC<From_data>= ({Data , sx}) => {
  return (
    <Box sx={{height:"100%", width:"100%"}} >
        <Box sx={{...sx}}>

        {Data?.map((item:Form_values)=>(
            <Box sx={{display :'flex', justifyContent:"space-between", m:2, alignItems:"end"}}>
             <Translate id={`form_id_${item}`} Variant="overline"  defalultMessage={item}/>
             <TextField name={item}  variant="filled"/>
            </Box>
        ))}
        </Box>
        </Box>
  )
}

export default Form_inputs