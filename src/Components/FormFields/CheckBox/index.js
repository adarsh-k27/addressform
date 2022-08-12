import React from 'react'
import{FormGroup,FormControlLabel,Checkbox,FormLabel,FormControl} from '@material-ui/core'
import { useField ,useFormikContext} from 'formik'
function CheckBoxWrapper({
    name,
    legend,
    label,
    ...otherProps
}) {
  
    const [CheckBoxField,meta]=useField(name)
    const {SetFieldValue}=useFormikContext()

    const handleChange=evt=>{
        const {checked}=evt.target;
        SetFieldValue(name,checked)
    }
 const  CheckBoxConfig={
     ...CheckBoxField,
        ...otherProps,
        fullwidth:true,
        variant:"outlined",
        onChange:handleChange,
        
    }
    const CheckBoxValidation={}
    
    if(meta && meta.touched && meta.error){
       CheckBoxValidation.error=true;
       CheckBoxValidation.helperText=meta.error;
    }
  return (
    <FormControl {...CheckBoxValidation}>
        <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
        <FormControlLabel label={label} control={ <Checkbox {...CheckBoxConfig}> </Checkbox> } ></FormControlLabel>
    </FormGroup>
    </FormControl>
     
  )
}

export default CheckBoxWrapper