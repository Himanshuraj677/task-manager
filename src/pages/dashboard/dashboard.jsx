import React from 'react'
import "./dashboard.css";
import Task from "../../component/task/task";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="all-task">
        <h2 className='dashboard-heading'>All tasks</h2>
        <hr />
        <Task />
      </div>
    </div>
  )
}

export default Dashboard
