import React from 'react';
import './DisplayMenu.css';
import displayIcon from '../../assets/images/icons_FEtask/Display.svg';
import downIcon from '../../assets/images/icons_FEtask/down.svg';

const DisplayMenu = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className="display-menu">
      <div className="dropdown">
        <button className="dropdown-btn">
          <img src={displayIcon} alt="Display" className="icon" /> Display
          <img src={downIcon} alt="Dropdown Arrow" className="dropdown-arrow" />
        </button>
        <div className="dropdown-content">
          <div className="dropdown-section">
            <span>Grouping:</span>
            <button
              className={grouping === 'status' ? 'active' : ''}
              onClick={() => setGrouping('status')}
            >
              Status
            </button>
            <button
              className={grouping === 'user' ? 'active' : ''}
              onClick={() => setGrouping('user')}
            >
              User
            </button>
            <button
              className={grouping === 'priority' ? 'active' : ''}
              onClick={() => setGrouping('priority')}
            >
              Priority
            </button>
          </div>
          <div className="dropdown-section">
            <span>Ordering:</span>
            <button
              className={ordering === 'priority' ? 'active' : ''}
              onClick={() => setOrdering('priority')}
            >
              Priority
            </button>
            <button
              className={ordering === 'title' ? 'active' : ''}
              onClick={() => setOrdering('title')}
            >
              Title
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DisplayMenu;
