import React from 'react'
import {TextField,MenuItem} from '@material-ui/core' ;
import {useField,useFormikContext} from 'formik'
function SelectWrapper({
    name,
    options,
    ...otherProps
}) {
    
const {setFieldValue}=useFormikContext()

    const handleChange=evt=>{
        const {value}=evt.target;
        setFieldValue(name,value)
        }
    const [Field,meta]=useField(name);


    const SelectConfig={
        ...otherProps,
        ...Field,
        select:true,
        variant:"outlined",
        fullWidth:true,
        onChange:handleChange,
      }
      if(meta && meta.touched && meta.error){
          SelectConfig.error=true;
          SelectConfig.helperText=meta.error
      }
  return (
     
    <TextField {...SelectConfig} key={name}>
        {
            Object.keys(options).map((item,pos)=>{
                
                return <MenuItem value={options[item]}>{options[item]}</MenuItem>
            })
        }
        
        
    </TextField>
  )
}

export default SelectWrapper