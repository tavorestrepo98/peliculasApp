import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Movie} from '../models/movieDB.model';

import {RootStackParams} from '../navigation/Navigation';

import {environment} from '../../environment/environment';

type DetailScreenProps = StackNavigationProp<RootStackParams, 'Home'>;

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster: FC<Props> = ({movie, width = 290, height = 400}) => {
  const urlImage = `${environment.urlPosterImage}${movie.poster_path}`;

  const navigation = useNavigation<DetailScreenProps>();

  return (
    <TouchableOpacity
      style={{
        width,
        height,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      onPress={() => navigation.navigate('Detail', movie)}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{uri: urlImage}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
});
