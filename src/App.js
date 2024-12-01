import React, { useState, useEffect } from 'react';
import Board from './components/Board/Board'; // Assuming this is your Kanban Board component
import DisplayMenu from './components/DisplayMenu/DisplayMenu';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');

  // Load saved preferences on component mount
  useEffect(() => {
    const savedGrouping = localStorage.getItem('grouping');
    const savedOrdering = localStorage.getItem('ordering');
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedOrdering) setOrdering(savedOrdering);
  }, []);

  // Save preferences whenever they change
  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  // Fetch tickets from API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setTickets(data.tickets || []))
      .catch((err) => console.error('Error fetching tickets:', err));
  }, []);

  return (
    <div className="app">
      {/* Display Menu */}
      <DisplayMenu 
        grouping={grouping} 
        setGrouping={setGrouping} 
        ordering={ordering} 
        setOrdering={setOrdering} 
      />
      
      {/* Kanban Board */}
      <Board 
        tickets={tickets} 
        grouping={grouping} 
        ordering={ordering} 
      />
    </div>
  );
};

export default App;
