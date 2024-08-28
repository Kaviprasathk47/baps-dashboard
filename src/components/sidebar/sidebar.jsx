import React from 'react';
import './sidebar.css';
import Logo from './img/images.png';
import Data from '../../data/data.js';

const Sidebar = () => {
  return (
    <div className="flex flex-col relative pt-4 transition-all duration-300 ease-linear">
      {/*--------LOGO DIV------- */}
      <div className="flex gap-3 justify-center items-center max-h-12">
        <img src={Logo} alt="Logo" className="w-16 h-auto object-contain" />
        <span className="text-sm font-bold">
          <span className="text-xl text-red-600">B</span>APS
        </span>
      </div>
      {/*--------MENU DIV------- */}
      <div className="mt-10 flex flex-col gap-6 ">
        <div className="flex text-center gap-5">
           <Data/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
