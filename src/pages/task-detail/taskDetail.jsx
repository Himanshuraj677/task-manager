import React, { useState } from 'react';
import './taskDetail.css';

const TaskDetails = () => {
  const [task, setTask] = useState({
    id: 1,
    title: 'Sample Task',
    description: 'This is a sample task description.',
    priority: 'medium',
    due_date: '2024-07-15',
    created_at: '2024-06-01',
    updated_at: '2024-06-15',
    comments: [
      { id: 1, text: 'This is the first comment.', created_at: '2024-06-10' },
      { id: 2, text: 'This is the second comment.', created_at: '2024-06-11' },
    ],
  });
  const [editMode, setEditMode] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [editedTask, setEditedTask] = useState(task);

  const handleEditChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setTask(editedTask);
    setEditMode(false);
  };

  const handleDelete = () => {
    console.log('Task deleted');
  };

  const handleAddComment = () => {
    const newCommentObj = {
      id: task.comments.length + 1,
      text: newComment,
      created_at: new Date().toISOString().split('T')[0],
    };
    setTask({
      ...task,
      comments: [...task.comments, newCommentObj],
    });
    setNewComment('');
  };

  return (
    <div className="task-details">
      {editMode ? (
        <div className="task-edit">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={editedTask.description}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Priority:
            <select
              name="priority"
              value={editedTask.priority}
              onChange={handleEditChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label>
            Due Date:
            <input
              type="date"
              name="due_date"
              value={editedTask.due_date}
              onChange={handleEditChange}
            />
          </label>
          <div className="task-edit-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="task-view">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>
            <strong>Priority:</strong> {task.priority}
          </p>
          <p>
            <strong>Due Date:</strong> {task.due_date}
          </p>
          <p>
            <strong>Created At:</strong> {task.created_at}
          </p>
          <p>
            <strong>Updated At:</strong> {task.updated_at}
          </p>
          <div className="task-view-buttons">
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <div className="task-comments">
            <h4>Comments</h4>
            <ul>
              {task.comments.map((comment) => (
                <li key={comment.id}>
                  {comment.text} <span>({comment.created_at})</span>
                </li>
              ))}
            </ul>
            <div className="add-comment">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
