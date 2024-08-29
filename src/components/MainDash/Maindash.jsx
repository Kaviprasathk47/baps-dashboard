import React from "react";
import Cards from "../cards/cards.js";
import "./mainDash.css";
import Message from "../Message/mesage.js";
import ChatBox from "../ChatBox/ChatBox.js";

const Maindash = () => {
  return (
    <div className="flex space-y-5">
      <div className="flex-1 p-6">
        <div className="mb-2">
          <span className="font-bold text-4xl">Dashboard</span>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="col-span-3 grid grid-cols-3 gap-6">
            <Cards />
            
          </div>
          <div className="col-span-1">
            <ChatBox />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindash;
