import React from 'react'
import "./NavButton.css";

const NavButton = ({imgsrc, taskDescription}) => {
  return (
    <div className='nav-vertical-button'>
      <img className='task-image' src={imgsrc} alt="Task Button" />
      <div className="task-description">{taskDescription}</div>
    </div>
  )
}

export default NavButton;
