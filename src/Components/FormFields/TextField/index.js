
import React from 'react'
import {TextField} from '@material-ui/core'
import { useField } from 'formik'

function TextFieldWrapper({
  name,
  ...otherProps
}) {
    const [FieldProp,meta]=useField(name);
    const TextFieldConfig={
      ...FieldProp,
      ...otherProps,
        variant:"outlined",
        fullWidth :true,
    }
if(meta && meta.touched && meta.error  ){
  TextFieldConfig.error=true;
  TextFieldConfig.helperText=meta.error;
}
  return (
    <TextField {...TextFieldConfig} key={name}></TextField>
  )
}

export default TextFieldWrapper;