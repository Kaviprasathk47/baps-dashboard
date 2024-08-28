import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Cardvalue = (props) => {
  const data = {
   
    datasets: [
      {
        label: props.title,  // Title of the chart (e.g., Sales)
        data: props.series,  // Data for each segment
        backgroundColor: ["#ef4444","#34d399","#99f6e4","#38bdf8","#818cf8","#818cf8"], // Colors for each segment
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div style={{ backgroundColor: props.color.backGround, boxShadow: props.color.boxShadow }} className="p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h3>{props.title}</h3> {/* Display the chart title */}
        <div>{props.png}</div>
      </div>
      <Doughnut data={data} /> {/* Render the Doughnut chart */}
      <p>{props.value}</p> {/* Display the value (e.g., total sales) */}
    </div>
  );
};

export default Cardvalue;
