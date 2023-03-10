import React from 'react';
import './App.css';
import SongList from './components/song-list';
import SongFilter from './components/song-filter';

function App() {
  const [items, setitems] = React.useState([] as SongItem[])

  document.addEventListener('onSearched', (e: any) => {
    const theItems : Array<SongItem> = [
      {
        name: "Walkies in the Park"
      },
      {
        name: "Dargalot of Camdor"
      }
    ]

    let result:Array<SongItem> = theItems;

    if (e.detail)
      result = theItems.filter(item => item.name.includes(e.detail));

    if (!result)
      result = []

    setitems(result);
  });

  return (
    <div className="App">
      <SongFilter />
      <SongList items={items}/>
    </div>
  );
}

export default App;
