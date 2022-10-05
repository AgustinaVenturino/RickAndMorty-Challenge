import React, {createContext, useReducer} from 'react';
import rickAndMortyApi from '../../api/rickAndMortyApi';
import {getPageParam} from '../../helpers/pagination';
import {
  Result,
  RickAndMortyResponse,
} from '../../interfaces/rickMortyInterface';
import {RickMortyReducer, RickMortyState} from './RickMortyReducer';

type RickMortyContextProps = {
  characters: Result[];
  nextPage?: string;
  prevPage?: string;
  pages: number | null;
  getCharacters: (page?: string) => void;
};

const initialState: RickMortyState = {
  characters: [],
  nextPage: undefined,
  prevPage: undefined,
  pages: 0,
};

export const RickMortyContext = createContext({} as RickMortyContextProps);

export const RickMortyProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(RickMortyReducer, initialState);
  const getCharacters = async (page: string = '') => {
    try {
      const paramPage = getPageParam(page);
      const {
        data: {
          results,
          info: {pages, next, prev},
        },
      } = await rickAndMortyApi.get<RickAndMortyResponse>(
        `/character?${paramPage}`,
      );
      dispatch({
        type: 'getCharacters',
        payload: {results, pages, next, prev},
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RickMortyContext.Provider value={{...state, getCharacters}}>
      {children}
    </RickMortyContext.Provider>
  );
};

export default RickMortyContext;
