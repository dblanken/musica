import React from 'react';

type SongProps = {
  name: string,
};

function Song(props: SongProps) {
  return (
    <div className="song">
      {props.name}
    </div>
  );
}

export default Song;
