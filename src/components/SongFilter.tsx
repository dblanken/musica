import React from 'react';

function SongFilter() {
  const [searchTerm, setsearchTerm] = React.useState('')

  React.useEffect(() => {
    const event : any = new CustomEvent("onSearched", {detail: searchTerm});
    document.dispatchEvent(event);
  }, [searchTerm])

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
