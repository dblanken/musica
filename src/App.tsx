import React from 'react';
import SongList from './components/SongList';
import SongFilter from './components/SongFilter';
import Header from './components/Header';
import CoverArt from './images/default.png'
import './App.css';

function App() {
  const [songs, setSongs] = React.useState([] as SongItem[])

  const originalSongs: SongItem[] = [
    {
      name: "Darglot of Camdor",
      length: { minutes: 4, seconds: 24 },
      link: "https://www.youtube.com/watch?v=ulOde9limgw",
      copyrightYear: 2022,
      yearWritten: 2005,
      coverart: CoverArt
    },
    {
      name: "Jamie (The Tiger Lily)",
      length: { minutes: 3, seconds: 35 },
      link: "https://www.youtube.com/watch?v=_ruaYOw0n54",
      copyrightYear: 2015,
      yearWritten: 2015,
      coverart: CoverArt
    },
    {
      name: "Shiloh and Me",
      length: { minutes: 3, seconds: 35 },
      link: "https://www.youtube.com/watch?v=ffSDJGnmsig",
      copyrightYear: 2022,
      yearWritten: 2022,
      coverart: CoverArt
    }
  ]

  function onSearched(searchTerm: string) {
    setSongs(filterSongs(originalSongs, searchTerm, byNameStrategy))
  }

  return (
    <div className="App">
      <Header />
      <SongFilter onSearched={onSearched} />
      <SongList items={songs} />
    </div>
  );
}

const filterSongs = (
  songs: SongItem[],
  searchTerm: string,
  songStrategy: (song: SongItem, searchTerm: string) => boolean): SongItem[] => {
  return songs.filter(song => songStrategy(song, searchTerm)) || [];
}

const byNameStrategy =
  (song: SongItem, searchTerm: string) => {
    return song.name.toLowerCase().includes(searchTerm);
  }

export default App;
