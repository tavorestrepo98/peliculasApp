import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';

import {MoviePoster} from './MoviePoster';

import {Movie} from '../models/movieDB.model';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider: FC<Props> = ({title, movies}) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={({id}) => id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
