/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {movieDB} from '../api/movieDB';

import {MovieFull} from '../models/movieDetail.model';
import {MovieCredits, Cast} from '../models/movieCredits.model';

interface MovieDetailsState {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [movieDetailsState, setMovieDetailsState] = useState<MovieDetailsState>(
    {
      isLoading: true,
      movieFull: {} as MovieFull,
      cast: [],
    },
  );

  const getMovieDetails = async () => {
    try {
      const resp = await Promise.all([
        movieDB.get<MovieFull>(`/${movieId}`),
        movieDB.get<MovieCredits>(`/${movieId}/credits`),
      ]);
      setMovieDetailsState({
        isLoading: false,
        movieFull: resp[0].data,
        cast: resp[1].data.cast,
      });
    } catch (error) {
      // console.log(error);
      setMovieDetailsState(state => ({
        ...state,
        isLoading: false,
      }));
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...movieDetailsState,
  };
};
