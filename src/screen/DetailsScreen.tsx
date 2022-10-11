import React, {useContext, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Budget from '../components/common/Budget';
import EpisodeListElement from '../components/common/EpisodeListElement';
import RickMortyContext from '../context/RickandMorty/RickMortyContext';
import {EBackgroundColor} from '../enums/EStyles';
import styles from '../theme/detailsTheme';
import LoadingScreen from './LoadingScreen';

const DetailsScreen = ({route}: {route: any}) => {
  const {
    character,
    character: {
      image,
      id,
      name,
      gender,
      species,
      status,
      type,
      location,
      origin,
    },
  } = route.params;

  const {getEpisodes, currentEpisodes} = useContext(RickMortyContext);

  useEffect(() => {
    getEpisodes(character);
  }, []);

  if (currentEpisodes.length === 0) return <LoadingScreen />;
  return (
    <View key={id} style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.originText}>{origin.name}</Text>
      </View>
      <View style={styles.characterInfoContainer}>
        {gender && (
          <View style={styles.budgetContainer}>
            <Budget
              customContainerStyle={styles.infoContainer}
              textKey="Gender"
              textValue={gender}
              color={EBackgroundColor.lightBlue}
            />
          </View>
        )}
        {species && (
          <View
            style={[
              styles.budgetContainer,
              {
                alignItems: 'flex-end',
              },
              styles.leftRadius,
            ]}>
            <Budget
              customContainerStyle={[
                styles.infoContainer,
                styles.leftRadius,
                {maxWidth: '85%'},
              ]}
              textKey="Species"
              textValue={species}
              color={EBackgroundColor.green}
            />
          </View>
        )}
        {status && (
          <View style={styles.budgetContainer}>
            <Budget
              customContainerStyle={styles.infoContainer}
              textKey="Status"
              textValue={status}
              color={EBackgroundColor.lightBlue}
            />
          </View>
        )}
        {type && (
          <View
            style={[
              styles.budgetContainer,
              {
                alignItems: 'flex-end',
              },
            ]}>
            <Budget
              customContainerStyle={[
                styles.infoContainer,
                {maxWidth: '85%'},
                styles.leftRadius,
              ]}
              textKey="Type"
              textValue={type}
              color={EBackgroundColor.green}
            />
          </View>
        )}
        {location && (
          <View
            style={[
              styles.budgetContainer,
              !type && {
                alignItems: 'flex-end',
              },
            ]}>
            <Budget
              customContainerStyle={[
                styles.infoContainer,
                {maxWidth: '60%'},
                !type && styles.leftRadius,
              ]}
              textKey="Location"
              textValue={location.name}
              color={type ? EBackgroundColor.lightBlue : EBackgroundColor.green}
            />
          </View>
        )}
      </View>
      {currentEpisodes && (
        <Text
          style={styles.episode}>
          Episodes
        </Text>
      )}
      {currentEpisodes && (
        <FlatList
          data={currentEpisodes}
          renderItem={item => <EpisodeListElement item={item} />}
          keyExtractor={item => item.id.toString()}
          style={{maxHeight: '28%'}}
        />
      )}
    </View>
  );
};
export default DetailsScreen;
