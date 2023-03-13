import React from 'react';
import Card from './w3c/Card';

type SongProps = {
  song: SongItem,

};

function Song({song}: SongProps) {
  return (
    <>
      <Card title={song.name} img={song.coverart} url={song.link} urlText="Listen">
        <div>
          <div>
            {song.length.minutes}:{song.length.seconds}
          </div>
          <div className="row">
            <div className="mx-auto col">
              Copyright &copy; {song.copyrightYear}
            </div>
            <div className="text-end col">
              Written {song.yearWritten}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Song;
