import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h6>{props.restaurant}</h6>
      <p>{props.address}</p>
      <p>{props.zipcode}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default Card;
