import React, {FC} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';

import {MovieDetails} from '../components/MovieDetails';

import {useMovieDetail} from '../hooks/useMovieDetail';

import {RootStackParams} from '../navigation/Navigation';
import {environment} from '../../environment/environment';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen: FC<Props> = ({route, navigation}) => {
  const movie = route.params;

  const {isLoading, movieFull, cast} = useMovieDetail(movie.id);

  const urlImage = `${environment.urlPosterImage}${movie.poster_path}`;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri: urlImage}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={{marginTop: 0}}>
        {isLoading ? (
          <ActivityIndicator size={30} color="grey" />
        ) : (
          <MovieDetails movieFull={movieFull} cast={cast} />
        )}
      </View>

      {/* botón de cerrar */}
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        style={styles.backButton}>
        <Icon name="arrow-back-outline" size={50} color="black" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 17,
  },
});
