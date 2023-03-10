declare type SongLength = {
  minutes: number,
  seconds: number
}

declare type SongItem = {
  name: string,
  coverart: string,
  length: SongLength,
  link: string,
  copyrightYear: number,
  yearWritten: number,
};
