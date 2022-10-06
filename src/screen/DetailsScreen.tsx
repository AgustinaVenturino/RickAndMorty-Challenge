import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Budget from '../components/common/Budget';
import Button from '../components/common/Button';
import EpisodeListElement from '../components/common/EpisodeListElement';
import RickMortyContext from '../context/RickandMorty/RickMortyContext';
import {EBackgroundColor} from '../enums/EStyles';
import {EpisodesResult} from '../interfaces/rickMortyInterface';
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
      episode,
    },
  } = route.params;
  // const {character} = route.params;

  const {getEpisodes, currentEpisodes} = useContext(RickMortyContext);
  console.log(typeof currentEpisodes);

  if (currentEpisodes.lenght > 0) console.log(currentEpisodes);

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
          style={{
            fontSize: 20,
            color: '#8aedb3',
            backgroundColor: 'rgba(0, 0, 0, 0.48)',
            marginTop: 14,
            paddingVertical: 10,
            paddingLeft: 10,
          }}>
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