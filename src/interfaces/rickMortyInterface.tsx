import {Gender, Species, Status} from '../enums/ERickMorty';

export interface RickAndMortyResponse {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}
export interface EpisodesResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Result {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
export interface SimpleCharacter {
  id: number;
  name: string;
  species: Species;
  image: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
