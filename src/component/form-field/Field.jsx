import React from 'react'
import "./Field.css";
const Field = ({field_name, input_type}) => {
  return (
    <div className='form-field'>
      <label htmlFor={field_name.toLowerCase()}>{field_name}</label>
      <input id={field_name.toLowerCase()} type={input_type} />
    </div>
  )
}

export default Field;
