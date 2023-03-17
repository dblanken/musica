import React, { useLayoutEffect } from 'react';

type SongFilterProps = {
  onSearched: Function
}

const useCallbackRef = (callback: Function) => {
  const callbackRef = React.useRef(callback)
  useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback]);
  return callbackRef;
}

function SongFilter({ onSearched }: SongFilterProps) {
  const [searchTerm, setsearchTerm] = React.useState('')
  const savedOnSearched = useCallbackRef(onSearched);

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      onSearched(searchTerm)
    }, 500);

    return () => clearTimeout(debounce);

  }, [searchTerm, savedOnSearched])

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
