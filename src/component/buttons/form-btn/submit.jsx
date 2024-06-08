import React from 'react';
import "./submit.css";


const Submit = ({btn_name}) => {
  return (
    <button type="submit" className='login register'>{btn_name}</button>
  )
}

export default Submit;
