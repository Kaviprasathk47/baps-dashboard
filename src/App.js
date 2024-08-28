import React from "react";
import SideBar from "./components/sidebar/sidebar";
import "./App.css";
import MainDash from './components/MainDash/Maindash'

const App = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#ffe1cb] via-[#ffcfd1] to-[#f3c6f1]"
      id="Amain"
    >
      <div className="AppGlass xl:auto ">
        <SideBar />
        <MainDash/>
      </div>
    </div>
  );
};

export default App;
