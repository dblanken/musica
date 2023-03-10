import React from 'react';
import Song from './song';

type SongListProps = {
  items: SongItem[]
}

function SongList(props: SongListProps) {
  return (
    <div className="songList">
      {props.items.map((item:any) => (
          <Song key={item.name} name={item.name} />
        ))}
    </div>
  );
}

export default SongList;
