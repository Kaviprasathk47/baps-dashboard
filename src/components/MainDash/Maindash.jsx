import React from 'react';
import Cards from '../cards/cards.js';
import './mainDash.css';
import Message from '../Message/mesage.js';


const Maindash = () => {
  return (
    <div className="flex space-y-5">
      {/* Main content area */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-2">
          <span className="font-bold text-4xl">Dashboard</span>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <Cards />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Message Section */}
          <div className="col-span-2">
            <Message />
          </div>

          {/* ChatBox Section */}
          
        </div>
      </div>
    </div>
  );
};

export default Maindash;
