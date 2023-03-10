import React from 'react';
import "./song.css";
import defaultPng from "./default.png";

type SongProps = {
  song: SongItem,

};

function Song(props: SongProps) {
  return (
    <div className="card song col m-3">
      <img src={defaultPng} className="card-img-top" alt={props.song.name} />
      <div className="card-body">
        <h5 className="card-title">{props.song.name}</h5>
        <p className="card-text">{props.song.length.minutes}:{props.song.length.seconds}</p>
        <a href={props.song.link} className="btn btn-primary">Listen</a>
      </div>
    </div>
  );
}

export default Song;
