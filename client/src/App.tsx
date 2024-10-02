import { Box } from "@mui/material"
import Form_inputs from "./component/Form_inputs"
import { Form_values } from "./Types/Inputs"

const App = () => {

 const  form_data:Form_values[] =["name", "email", "password", "confirm_password"] 
  return (
    <Box >
      <Form_inputs Data = {form_data} sx={{width:"25%",}} />
    </Box>
  )
}

export default App