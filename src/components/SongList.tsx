import React from 'react';
import Song from './song';

type SongListProps = {
  items: SongItem[]
}

function SongList(props: SongListProps) {
  return (
    <div className="songList row align-items-start">
      {props.items.map((item:any) => (
          <Song key={item.name} song={item} />
        ))}
    </div>
  );
}

export default SongList;
