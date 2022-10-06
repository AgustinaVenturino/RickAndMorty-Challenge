import React, {createContext, useReducer} from 'react';
import rickAndMortyApi from '../../api/rickAndMortyApi';
import {getPageParam, getEpisodesParam} from '../../helpers/pagination';
import {
  EpisodesResult,
  Result,
  RickAndMortyResponse,
} from '../../interfaces/rickMortyInterface';
import {RickMortyReducer, RickMortyState} from './RickMortyReducer';

type RickMortyContextProps = {
  characters: Result[];
  currentEpisodes: any;
  nextPage?: string;
  prevPage?: string;
  pages: number | null;
  getCharacters: (page?: string) => void;
  getEpisodes: (character: Result) => void;
};

const initialState: RickMortyState = {
  currentEpisodes: [],
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
  const getEpisodes = async (character: Result) => {
    try {
      const {episodeParam, numberOfEpisodes} = getEpisodesParam(
        character.episode,
      );
      const {data: episodes} = await rickAndMortyApi.get<any>(
        `/episode/${episodeParam}`,
      );

      dispatch({
        type: 'setCurrentEpisodes',
        payload: numberOfEpisodes === 1 ? [episodes] : episodes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RickMortyContext.Provider value={{...state, getCharacters, getEpisodes}}>
      {children}
    </RickMortyContext.Provider>
  );
};

export default RickMortyContext;
