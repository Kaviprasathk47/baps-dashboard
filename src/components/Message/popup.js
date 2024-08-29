import React, { useState } from "react";

const Popup = ({ details }) => {
  const [showUp, setShow] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 text-white py-1 px-3 rounded"
        onClick={() => setShow(!showUp)}
      >
        {details}
      </button>
      {showUp && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="p-8 bg-white h-auto w-auto max-w-lg border-4 rounded-2xl border-sky-400 shadow-xl">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <h1 className="text-sky-600 text-2xl font-semibold">Days:</h1>
                <p className="text-gray-700 mt-2">2 days</p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sky-600 text-2xl font-semibold">Reason:</h1>
                <p className="text-gray-700 mt-2">Meeting</p>
              </div>
            </div>
            <button
              className="mt-5 bg-red-500 text-white py-1 px-3 rounded"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
