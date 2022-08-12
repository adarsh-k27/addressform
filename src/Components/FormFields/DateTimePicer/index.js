import React from 'react'
import {TextField} from '@material-ui/core';
import { useField } from 'formik';
function DateTimePicker({
    name,
    ...otherProps
}) {
    const [Field,meta]=useField(name)
    const DateTimeConfig={
        ...Field,
        ...otherProps,
        type:"date",
        variant:"outlined",
        fullWidth:true,
        InputLabelProps:{
            shrink: true
        }
  
    }
    if(meta && meta.touched && meta.error){
        DateTimeConfig.error=true;
        DateTimeConfig.helperText=meta.error;
    }
  return (
      
    <TextField {...DateTimeConfig} key={name}></TextField>
  )
}

export default DateTimePicker;