import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CarouselMovies} from '../components/CarouselMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {
    peliculasEnCine,
    peliculasPopulares,
    peliculasTopRated,
    PeliculasUpComming,
    isLoading,
  } = useMovies();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  } else {
    // console.log(peliculasEnCine);
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: top + 10}}>
        {/* Corousel principal */}
        <CarouselMovies peliculasEnCine={peliculasEnCine} />

        {/* HorizontalSlider de peliculas */}
        <HorizontalSlider title="Populares" movies={peliculasPopulares} />
        <HorizontalSlider
          title="Mejor calificadas"
          movies={peliculasTopRated}
        />
        <HorizontalSlider
          title="Próximos Estrenos"
          movies={PeliculasUpComming}
        />
      </View>
    </ScrollView>
  );
};
