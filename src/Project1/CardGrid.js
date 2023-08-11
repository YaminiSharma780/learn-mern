import React from "react";

const CardGrid = () => {
  const imageWidth = 225;
  const imageHeight = 200;
  // Sample data for the cards
  const cards = [
    {
      title: "Card 1",
      content: "This is the content of Card 1",
      image: "myDirectory/Images/Rasturant1.jpeg",
    },
    {
      title: "Card 2",
      content: "This is the content of Card 2",
      image: "myDirectory/Images/Rasturant2.jpeg",
    },
    {
      title: "Card 3",
      content: "This is the content of Card 3",
      image: "myDirectory/Images/Rasturant3.jpeg",
    },
    {
      title: "Card 4",
      content: "This is the content of Card 4",
      image: "myDirectory/Images/Rasturant4.jpeg",
    },
    {
      title: "Card 5",
      content: "This is the content of Card 1",
      image: "myDirectory/Images/Rasturant1.jpeg",
    },
    {
      title: "Card 6",
      content: "This is the content of Card 2",
      image: "myDirectory/Images/Rasturant2.jpeg",
    },
    {
      title: "Card 7",
      content: "This is the content of Card 3",
      image: "myDirectory/Images/Rasturant3.jpeg",
    },
    {
      title: "Card 8",
      content: "This is the content of Card 4",
      image: "myDirectory/Images/Rasturant4.jpeg",
    },
    {
      title: "Card 9",
      content: "This is the content of Card 1",
      image: "myDirectory/Images/Rasturant1.jpeg",
    },
    {
      title: "Card 10",
      content: "This is the content of Card 2",
      image: "myDirectory/Images/Rasturant2.jpeg",
    },
    {
      title: "Card 11",
      content: "This is the content of Card 3",
      image: "myDirectory/Images/Rasturant3.jpeg",
    },
    {
      title: "Card 12",
      content: "This is the content of Card 4",
      image: "myDirectory/Images/Rasturant4.jpeg",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: imageWidth, height: imageHeight }}
                />
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
