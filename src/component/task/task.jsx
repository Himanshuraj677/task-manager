import React from 'react';
import "./task.css";
import CommentSvg from "../../assets/svg/commentIcon.svg";
import TaskButton from '../buttons/task-button/taskButton';

const Task = () => {
  return (
    <div className='dashboard-task'>
      <input type="checkbox" name="task-check" id="task-check" className="task-check" />
      <div className="task-title">I am creating a website</div>
      <div className="task-flex priority">
        <div className="priority-dot high"></div>
        <div>High Priority</div>
      </div>
      <div className="task-status in-progress">In progress</div>
      <div className="task-actions">
        <TaskButton desc="Delete task" />
      </div>
    </div>
  );
};

export default Task;
