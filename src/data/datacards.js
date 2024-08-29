import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { PiHandWithdrawLight } from 'react-icons/pi';

const defaultColor = {
  backGround: "linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
  boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",
};

const CardData = [
  {
    title: "Sales",
    color: defaultColor,
    barValue: 70,
    value: "4567",
    png: <FaDollarSign />,
    series: [
      {
        name: ["English","maths","tamil","Science","Computer"],
        data: [31, 45, 78, 54, 12],
      },
    ],
  },
  {
    title: "Marketing",
    color: defaultColor,
    barValue: 70,
    value: "25,970",
    png: <PiHandWithdrawLight />,
    series: [
      {
        name: ["English","maths","tamil","Science","Computer"],
        data: [31, 45, 78, 54, 12],
      },
    ],
  },
  {
    title: "Development",
    color: defaultColor,
    barValue: 80, // Example value, you can adjust this
    value: "15,500", // Example value, you can adjust this
    png: <FaDollarSign />, // You might want to use a different icon
    series: [
      {
        name: ["English","maths","tamil","Science","Computer"],
        data: [28, 40, 60, 70, 80], // Example data, you can adjust this
      },
    ],
  },
 
];

export default CardData;
