import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../models/movieDB.model';

import {MoviePoster} from './MoviePoster';

const {width: windowWidth} = Dimensions.get('window');

interface Props {
  peliculasEnCine: Movie[];
}

export const CarouselMovies: FC<Props> = ({peliculasEnCine}) => {
  return (
    <View style={{height: 415}}>
      <Carousel
        data={peliculasEnCine}
        renderItem={({item}) => <MoviePoster movie={item} />}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.76}
        inactiveSlideOpacity={0.9}
      />
    </View>
  );
};
