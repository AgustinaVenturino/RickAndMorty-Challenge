import React, {useRef, useEffect} from 'react';
import {View, Image, Text, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Status} from '../../enums/ERickMorty';
import fadeIn from '../../helpers/animations';
import {Result} from '../../interfaces/rickMortyInterface';
import styles from '../../theme/characterPosterTheme';

interface Props {
  character: Result;
  goToDetails?: (character: Result) => void;
}

const CharacterPoster = ({
  character,
  character: {name, image, species, status, gender},
  goToDetails,
}: Props) => {
  const uri = image;
  const backgroundUrl = '../../assets/galaxy_background.jpg';
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn(opacity, 9000);
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetails && goToDetails(character)}>
      <View style={styles.imageContainer}>
        <Image source={require(backgroundUrl)} style={styles.backgroundImage} />
        <Animated.Text
          style={[
            styles.status,
            {
              opacity: opacity,
            },
            status === Status.Alive && styles.alive,
            status === Status.Dead && styles.dead,
            status === Status.Unknown && styles.unknow,
          ]}>
          {status}
        </Animated.Text>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.species}>Species: {species}</Text>
        <Text style={styles.species}>Gender: {gender}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterPoster;
