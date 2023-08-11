import React from 'react';
import CardDetails from './CardDetails.js';

const ParentComponent = () => {
  const cardDetailsList = [
    {
      title: 'Restaurant Noida',
      description: 'number 1 restaurant in Noida',
      image: 'myDirectory/Images/Rasturant1.jpeg',
      location: 'Sector 135, Noida'
    },
    {
      title: 'Restaurant Delhi',
      description: 'number 1 restaurant in Delhi',
      image: 'myDirectory/Images/Rasturant2.jpeg',
      location: 'Khan Market, Delhi'
    },
    {
      title: 'Restaurant Gurgaon',
      description: 'number 1 restaurant in Gurgaon',
      image: 'myDirectory/Images/Rasturant3.jpeg',
      location: 'Sector 38, Gurgaon'
    },
  ];

  return (
    <div className="card-container">
      {cardDetailsList.map((card, index) => (
        <CardDetails
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          location={card.location}
        />
      ))}
    </div>
  );
};

export default ParentComponent;
