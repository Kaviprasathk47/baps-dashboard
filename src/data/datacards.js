import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { PiHandWithdrawLight } from 'react-icons/pi';

const defaultColor = {
  backGround: "linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
  boxShadow: "0px 10px 20px 0px #e0c6f5",
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
        name: ["English","maths","tamil","Science"],
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
        name: "marketing",
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
        name: "development",
        data: [28, 40, 60, 70, 80], // Example data, you can adjust this
      },
    ],
  },
];

export default CardData;
