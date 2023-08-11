import React from 'react';

// Without Props
// const CardDetails = ({ title, description, image, location }) => {
// With Props
  const CardDetails = (props) => {

    const imageWidth = 300; // Replace this with the desired width in pixels
    const imageHeight = 200; // Replace this with the desired height in pixels

// Without Props
  // return (
  //     <div className="card">
  //       <img src={image} alt={.title} style={{ width: imageWidth, height: imageHeight}} />
  //       <h3>{title}</h3>
  //       <p>{description}</p>
  //       <p>{location}</p>
  //     </div>
  // );

// With Props
  return (
    <div className="card">
      <img src={props.image} alt={props.title} style={{ width: imageWidth, height: imageHeight}} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.location}</p>
    </div>
  );
};

export default CardDetails;
