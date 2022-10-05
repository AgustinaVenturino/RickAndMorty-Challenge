import {Result} from '../../interfaces/rickMortyInterface';

export interface RickMortyState {
  characters: Result[];
  nextPage?: string;
  prevPage?: string;
  pages: number;
}

type RickMortyAction = {
  type: 'getCharacters';
  payload: {
    results: Result[];
    pages: number;
    next?: string;
    prev?: string;
  };
};

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

    default:
      return state;
  }
};
