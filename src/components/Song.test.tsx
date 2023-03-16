import React from 'react';
import { render, screen } from '@testing-library/react';
import Song from './Song';

test('renders a song', () => {
  const songItem: SongItem = {
    name: 'blah',
    copyrightYear: 2023,
    coverart: './blah.jpg',
    length: {
      minutes: 5,
      seconds: 5
    },
    link: "https://localhost",
    yearWritten: 2022
  }

  render(<Song song={songItem} />);

  const songNameElement = screen.getByText(songItem.name);
  expect(songNameElement).toBeInTheDocument();

  const songLength = screen.getByText(`${songItem.length.minutes}:${songItem.length.seconds}`);
  expect(songLength).toBeInTheDocument();

  const songCopyrightYear = screen.getByText(new RegExp(songItem.copyrightYear.toString(), 'i'));
  expect(songCopyrightYear).toBeInTheDocument();

  const songYearWritten = screen.getByText(new RegExp(songItem.yearWritten.toString(), 'i'));
  expect(songYearWritten).toBeInTheDocument();

  const songCoverart = screen.getByAltText(songItem.name);
  expect(songCoverart).toBeInTheDocument();
  expect(songCoverart).toHaveAttribute('src');
  expect(songCoverart.getAttribute('src')).toEqual(songItem.coverart);

  const songLink = screen.getByText("Listen");
  expect(songLink).toBeInTheDocument();
  expect(songLink.getAttribute('href')).toEqual(songItem.link);
});
