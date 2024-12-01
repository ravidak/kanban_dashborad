import React from 'react';
import Column from '../Column/Column';
import './Board.css';

const groupTickets = (tickets, grouping) => {
  const groups = {};
  tickets.forEach((ticket) => {
    const key = grouping === 'status' ? ticket.status :
                grouping === 'user' ? ticket.assignee :
                ticket.priority || 'No priority';
    if (!groups[key]) groups[key] = [];
    groups[key].push(ticket);
  });
  return groups;
};

const sortTickets = (tickets, ordering) => {
  return tickets.sort((a, b) => {
    if (ordering === 'priority') return b.priority - a.priority;
    if (ordering === 'title') return a.title.localeCompare(b.title);
    return 0;
  });
};

const Board = ({ tickets, grouping, ordering }) => {
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedGroups = Object.entries(groupedTickets).map(([key, group]) => ({
    key,
    tickets: sortTickets(group, ordering),
  }));

  return (
    <div className="board">
      {sortedGroups.map(({ key, tickets }) => (
        <Column key={key} title={key} tickets={tickets} />
      ))}
    </div>
  );
};

export default Board;
