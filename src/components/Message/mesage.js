import React from "react";
import MessageDetails from "../../data/Message.js";
import PopUp from './popu.js'; // Ensure the case matches the file name

const Message = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-5">
      <div className="grid grid-cols-5 gap-4 font-bold text-lg mb-4">
        <div>Name</div>
        <div>Reason</div>
        <div>Approval</div>
        <div>Time</div>
        <div>Details</div>
      </div>
      {MessageDetails.map((message, index) => (
        <div key={index} className="grid grid-cols-5 gap-3">
          <div>{message.name}</div>
          <div>{message.reason}</div>
          <div>
            <span className={`${message.approval !== "Approved" ? "bg-red-500" : "bg-cyan-500"} rounded-sm m-1 p-1 text-white`}>
              {message.approval}
            </span>
          </div>
          <div>{message.time}</div>
          <div>
            <PopUp details={message.details} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
