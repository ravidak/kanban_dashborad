import React from 'react';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const tasks = {
    todo: [
      { id: 'CAM-5', title: 'Add Multi-Language Support', type: 'Feature Request' },
      { id: 'CAM-8', title: 'Create Onboarding Tutorial for New Users', type: 'Feature Request' },
      { id: 'CAM-2', title: 'Implement Email Notification System', type: 'Feature Request' },
      { id: 'CAM-1', title: 'Update User Profile Page UI', type: 'Feature Request' }
    ],
    inProgress: [
      { id: 'CAM-3', title: 'Optimize Database Queries for Performance', type: 'Feature Request' }
    ],
    done: [
      { id: 'CAM-6', title: 'Enhance Search Functionality', type: 'Feature Request' },
      { id: 'CAM-7', title: 'Integrate Third-Party Payment Gateway', type: 'Feature Request' },
      { id: 'CAM-11', title: 'Conduct Security Vulnerability Assessment', type: 'Feature Request' },
      { id: 'CAM-10', title: 'Upgrade Server Infrastructure', type: 'Feature Request' },
      { id: 'CAM-9', title: 'Implement Role-Based Access Control (RBAC)', type: 'Feature Request' }
    ]
  };

  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <h3>Todo</h3>
        {tasks.todo.map((task) => (
          <div key={task.id} className="kanban-card">
            <h4>{task.id}</h4>
            <p>{task.title}</p>
            <span>{task.type}</span>
          </div>
        ))}
      </div>
      <div className="kanban-column">
        <h3>In Progress</h3>
        {tasks.inProgress.map((task) => (
          <div key={task.id} className="kanban-card">
            <h4>{task.id}</h4>
            <p>{task.title}</p>
            <span>{task.type}</span>
          </div>
        ))}
      </div>
      <div className="kanban-column">
        <h3>Done</h3>
        {tasks.done.map((task) => (
          <div key={task.id} className="kanban-card">
            <h4>{task.id}</h4>
            <p>{task.title}</p>
            <span>{task.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
