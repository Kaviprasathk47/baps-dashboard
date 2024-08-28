import React from 'react';
import './cards.css';
import DataCards from '../../data/datacards.js';
import Cardvalue from '../Cardnext/Cardvalue.js';

const CardsContainer = () => {
  return (
    <div className="lg:flex gap-5 block">
      {DataCards.map((card, index) => {
        return (
          <div className="w-full" key={index}>
            <Cardvalue
              title={card.title}
              png={card.png}
              series={card.series[0].data}
              value={card.value}
              barValue={card.barValue}
              color={card.color}
              labels={Array.isArray(card.series[0].name) ? card.series[0].name : [card.series[0].name]} // Handles array of labels
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
