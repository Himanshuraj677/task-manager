import React, { useState } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Example user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'currentpassword'
  });

  // Example task data
  const tasks = {
    pending: 5,
    completed: 10,
    inProgress: 3,
  };

  const [editNameMode, setEditNameMode] = useState(false);
  const [editPasswordMode, setEditPasswordMode] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEditName = () => {
    setEditNameMode(!editNameMode);
  };

  const handleEditPassword = () => {
    setEditPasswordMode(!editPasswordMode);
  };

  const mockApiCall = (currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (currentPassword === user.password) {
          resolve({ success: true, message: 'Password changed successfully.' });
        } else {
          reject({ success: false, message: 'Current password is incorrect.' });
        }
      }, 1000);
    });
  };

  const handleSaveName = () => {
    setUser({ ...user, name: newName });
    setMessage('Name changed successfully.');
    setEditNameMode(false);
  };

  const handleSavePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }

      const response = await mockApiCall(currentPassword, newPassword);
      if (response.success) {
        setUser({ ...user, password: newPassword });
        setMessage(response.message);
        setEditPasswordMode(false);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="account">
      <div className="profile-section">
        <h2>Profile</h2>
        <div className="profile-info">
          {editNameMode ? (
            <>
              <label>
                Name:
                <input 
                  type="text" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                />
              </label>
              {message && <p className="message">{message}</p>}
              <button className="save-button" onClick={handleSaveName}>Save</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button className="edit-button" onClick={handleEditName}>Edit Name</button>
            </>
          )}
        </div>
      </div>
      
      <div className="password-section">
        <h2>Change Password</h2>
        <div className="password-info">
          {editPasswordMode ? (
            <>
              <label>
                Current Password:
                <input 
                  type="password" 
                  value={currentPassword} 
                  onChange={(e) => setCurrentPassword(e.target.value)} 
                />
              </label>
              <label>
                New Password:
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
              </label>
              <label>
                Confirm New Password:
                <input 
                  type="password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </label>
              {message && <p className="message">{message}</p>}
              <button className="save-button" onClick={handleSavePassword}>Save Password</button>
            </>
          ) : (
            <>
              <button className="edit-button" onClick={handleEditPassword}>Change Password</button>
            </>
          )}
          <div className="forgot-password-link">
            <Link to='/forgetPassword'>Forgot Password?</Link>
          </div>
        </div>
      </div>

      <div className="tasks-section">
        <h2>Tasks Overview</h2>
        <div className="task-status">
          <div className="task-box pending-tasks">
            <p className="task-number">{tasks.pending}</p>
            <p>Pending Tasks</p>
          </div>
          <div className="task-box completed-tasks">
            <p className="task-number">{tasks.completed}</p>
            <p>Completed Tasks</p>
          </div>
          <div className="task-box in-progress-tasks">
            <p className="task-number">{tasks.inProgress}</p>
            <p>In Progress Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
