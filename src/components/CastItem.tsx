import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Cast} from '../models/movieCredits.model';
import {environment} from '../../environment/environment';

interface Props {
  actor: Cast;
}

export const CastItem: FC<Props> = ({actor}) => {
  const urlImage = `${environment.urlPosterImage}${actor.profile_path}`;

  return (
    <View style={styles.castItemContainer}>
      {actor.profile_path && (
        <Image source={{uri: urlImage}} style={styles.imageProfile} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  castItemContainer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 3,
    marginHorizontal: 5,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 16,
    opacity: 0.8,
  },
});
