import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../theme/episodeListElementTheme';

const EpisodeListElement = ({item: {item}}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item?.name}</Text>
    </View>
  );
};

export default EpisodeListElement;
