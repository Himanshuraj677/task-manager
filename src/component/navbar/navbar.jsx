import React from 'react'
import "./navbar.css";
import searchIcon from "../../assets/svg/searchIcon.svg";
import NavButton from '../nav-vertical/NavButton';
import taskPage from "../../assets/svg/taskPage.svg";
import newTask from "../../assets/svg/newTask.svg";
import dashboard from "../../assets/svg/dashboard.svg";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className="nav-horizontal">
            <div className="nav-task">TASKS</div>
            <div className="nav-flex-box">
                <div className="search-box">
                    <img className="search-icon" src={searchIcon} alt="Search Icon"></img>
                    <input className="task-search" type="text" value="" placeholder='Search for your Task'/>
                </div> 
                <div className="account-profile">
                    <img className="profile-icon" src="" alt="profile" />
                    <div className="account-name">Himanshu Raj</div>
                </div>
            </div>
        </div>
        <div className="nav-vertical">
            <Link to='/dashboard'><NavButton imgsrc={taskPage} taskDescription="Task List" /></Link>
            <Link to='/create'><NavButton imgsrc={newTask} taskDescription="New Task" /></Link>
            <Link to='/profile'><NavButton imgsrc={dashboard} taskDescription="Account" /></Link>
        </div>
    </div>
  )
}

export default Navbar;
