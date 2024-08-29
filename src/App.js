import React from "react";
import SideBar from "./components/sidebar/sidebar";
import "./App.css";
import MainDash from "./components/MainDash/Maindash";

const App = () => {
 // const [show,Setshow] = useState(true);
  return (
    <div id="Amain">
      <div className="AppGlass xl:auto mt-14">
        <SideBar />
        <MainDash />

      </div>
    </div>
  );
};

export default App;
