import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';

import {CastItem} from './CastItem';

import {Cast} from '../models/movieCredits.model';
import {MovieFull} from '../models/movieDetail.model';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails: FC<Props> = ({movieFull, cast}) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text> {movieFull.vote_average}</Text>
          {<Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>}
        </View>
        {/* Historia */}
        <Text style={{fontSize: 23, marginTop: 10}}>Historia</Text>
        <Text style={{fontSize: 15}}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={{fontSize: 23, marginTop: 10}}>Presupuesto</Text>
        <Text style={{fontSize: 17}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Cast */}
      <View style={{marginTop: 10, marginBottom: 60}}>
        <Text style={{fontSize: 23, marginTop: 10}}>Actores</Text>
        <FlatList
          data={cast}
          renderItem={({item}) => <CastItem actor={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};
