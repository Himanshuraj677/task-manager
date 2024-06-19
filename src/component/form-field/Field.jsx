import React from 'react';
import "./Field.css";

const Field = ({ field_name, input_type, value, handleChanges, name }) => {
  return (
    <div className='form-field'>
      <label htmlFor={field_name.toLowerCase()}>{field_name}</label>
      <input 
        id={field_name.toLowerCase()} 
        value={value} 
        type={input_type} 
        onChange={handleChanges} 
        name={name}
      />
    </div>
  )
}

export default Field;
