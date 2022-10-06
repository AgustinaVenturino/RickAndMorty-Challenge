import {EpisodesResult, Result} from '../../interfaces/rickMortyInterface';

export interface RickMortyState {
  characters: Result[];
  nextPage?: string;
  prevPage?: string;
  pages: number;
  currentEpisodes: any;
}

type RickMortyAction =
  | {
      type: 'getCharacters';
      payload: {
        results: Result[];
        pages: number;
        next?: string;
        prev?: string;
      };
    }
  | {type: 'setCurrentEpisodes'; payload: any};

export const RickMortyReducer = (
  state: RickMortyState,
  action: RickMortyAction,
): RickMortyState => {
  switch (action.type) {
    case 'getCharacters':
      return {
        ...state,
        characters: action.payload.results,
        nextPage: action.payload.next,
        prevPage: action.payload.prev,
        pages: action.payload.pages,
      };
    case 'setCurrentEpisodes':
      return {
        ...state,
        currentEpisodes: action.payload,
      };

    default:
      return state;
  }
};
