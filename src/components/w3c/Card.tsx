import React from 'react';
import defaultPng from "../../images/default.png";

type CardProps = {
  img: string,
  title: string,
  text: string,
  url: string,
  urlText: string,
}

function Card(props: CardProps) {
  return (
    <div className="card col m-3">
      <img src={propsImage(props.img)} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.url} className="btn btn-primary">{props.urlText}</a>
      </div>
    </div>
  );
}

function propsImage(img: string): string {
  if (!img)
    return defaultPng;

  return img;
}

export default Card;
