import React from 'react';

type SongFilterProps = {
  onSearched: Function
}

function SongFilter({ onSearched }: SongFilterProps) {
  const [searchTerm, setsearchTerm] = React.useState('')

  React.useEffect(() => {
    onSearched(searchTerm)
  }, [searchTerm, onSearched])

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setsearchTerm(e.currentTarget.value);
  }

  return (
    <div className="filter">
      <form>
        <div className="form-group">
          <label htmlFor="search">Filter by:</label>
          <input type="text" id="search" onChange={onChangeHandler} className="form-control" />
        </div>
      </form>
    </div>
  );
}

export default SongFilter;
