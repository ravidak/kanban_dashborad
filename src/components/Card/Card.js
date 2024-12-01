import React from 'react';
import './Card.css';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h4>{ticket.title}</h4>
      <p>{ticket.description}</p>
      <div className="footer">
        <span>Priority: {ticket.priority}</span>
        <span>Status: {ticket.status}</span>
      </div>
    </div>
  );
};

export default Card;
