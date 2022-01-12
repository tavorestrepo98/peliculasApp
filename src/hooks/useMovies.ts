import {useEffect, useState} from 'react';

import {movieDB} from '../api/movieDB';

import {MovieDBMoviesResponse, Movie} from '../models/movieDB.model';

interface IMoviesState {
  peliculasEnCine: Movie[];
  peliculasPopulares: Movie[];
  peliculasTopRated: Movie[];
  PeliculasUpComming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<IMoviesState>({
    peliculasEnCine: [],
    peliculasPopulares: [],
    peliculasTopRated: [],
    PeliculasUpComming: [],
  });
  const getMovies = async () => {
    try {
      const respTotal = await Promise.all([
        movieDB.get<MovieDBMoviesResponse>('/now_playing'),
        movieDB.get<MovieDBMoviesResponse>('/popular'),
        movieDB.get<MovieDBMoviesResponse>('/top_rated'),
        movieDB.get<MovieDBMoviesResponse>('/upcoming'),
      ]);
      setMoviesState(() => ({
        peliculasEnCine: respTotal[0].data.results,
        peliculasPopulares: respTotal[1].data.results,
        peliculasTopRated: respTotal[2].data.results,
        PeliculasUpComming: respTotal[3].data.results,
      }));
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log('Ocurrió un error');
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
