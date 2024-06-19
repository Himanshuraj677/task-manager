import React from 'react';
import "./taskButton.css";

const TaskButton = ({ desc }) => {
  return (
    <button className='task-button'>{desc}</button>
  );
};

export default TaskButton;
