/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import star from "../assets/star.png";

export default function Cards(props) {
  console.log(props);
  return (
    <section className="card">
      <img src={props.image} className="card-image" />
      <div className="card-stats">
        <img src={star} className="card-star" alt="Image of Star" />
        <span>{props.rating} </span>
        <span className="gray">({props.reviewCount}) . </span>
        <span className="gray">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </section>
  );
}
