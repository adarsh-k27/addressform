import React from 'react'
import {Button } from '@material-ui/core'
import { useFormikContext } from 'formik'
function ButtonWrapper({
    name,
    ...otherProps
})

{
    const {submitForm}=useFormikContext()
    const handleSubmit=()=>{
     submitForm()
    }
    const ButtonConfig={
        variant:"contained",
        fullWidth:true,
        color:"primary",
        onClick:handleSubmit,
        
    }
  return (
    <Button {...ButtonConfig} >{name}</Button>
  )
}

export default ButtonWrapper