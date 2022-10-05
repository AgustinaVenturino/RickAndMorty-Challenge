import React from 'react';
import {View, Text, Image} from 'react-native';
import Budget from '../components/common/Budget';
import {EBackgroundColor} from '../enums/EStyles';
import styles from '../theme/detailsTheme';

const DetailsScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const {
    character: {image, id, name, gender, species, status, type},
  } = route.params;

  return (
    <View key={id} style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.characterInfoContainer}>
        {gender && (
          <Budget
            customContainerStyle={styles.infoContainer}
            textKey="Gender"
            textValue={gender}
            color={EBackgroundColor.lightBlue}
          />
        )}
        {species && (
          <Budget
            customContainerStyle={[styles.infoContainer, styles.leftRadius]}
            textKey="Specie"
            textValue={species}
            color={EBackgroundColor.yellow}
          />
        )}
        {status && (
          <Budget
            customContainerStyle={styles.infoContainer}
            textKey="Status"
            textValue={status}
            color={EBackgroundColor.yellow}
          />
        )}
        {type && (
          <Budget
            customContainerStyle={[styles.infoContainer, styles.leftRadius]}
            textKey="Type"
            textValue={type}
            color={EBackgroundColor.yellow}
          />
        )}
      </View>
    </View>
  );
};
export default DetailsScreen;
