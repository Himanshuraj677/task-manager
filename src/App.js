import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/login/Login';
import Navbar from './component/navbar/navbar';
import Register from './pages/register/Register';
import Create from './pages/create/create';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';
import TaskDetails from './pages/task-detail/taskDetail.jsx';


import './App.css';
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="app">
      <Router>
        {isAuth && <Navbar />}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/create' element={<Create />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='task/1' element={<TaskDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
