import React from 'react';
import SongList from './components/song-list';
import SongFilter from './components/song-filter';
import Header from './components/Header';

function App() {
  const [songs, setSongs] = React.useState([] as SongItem[])

  document.addEventListener('onSearched', (e: any) => {
    const songs : SongItem[] = [
      {
        name: "Darglot of Camdor",
        length: { minutes: 4, seconds: 24 },
        link: "https://www.youtube.com/watch?v=ulOde9limgw",
        copyrightYear: 2022,
        yearWritten: 2005,
        coverart: "./images/default.png",
      },
      {
        name: "Jamie (The Tiger Lily)",
        length: { minutes: 3, seconds: 35 },
        link: "https://www.youtube.com/watch?v=_ruaYOw0n54",
        copyrightYear: 2015,
        yearWritten: 2015,
        coverart: "./images/default.png",
      },
      {
        name: "Shiloh and Me",
        length: { minutes: 3, seconds: 35 },
        link: "https://www.youtube.com/watch?v=ffSDJGnmsig",
        copyrightYear: 2022,
        yearWritten: 2022,
        coverart: "./images/default.png",
      }
    ]

    setSongs(filterSongsByName(songs, e.detail));
  });

  return (
    <div className="App">
      <div className="row">
        <Header />
      </div>
      <SongFilter />
      <SongList items={songs}/>
    </div>
  );
}

function filterSongsByName(songs:SongItem[], searchTerm: string) : SongItem[] {
  searchTerm = searchTerm.toLowerCase();

  if (!searchTerm)
  return songs;

  return songs.filter(song => song.name.toLowerCase().includes(searchTerm)) || [];
}

export default App;
