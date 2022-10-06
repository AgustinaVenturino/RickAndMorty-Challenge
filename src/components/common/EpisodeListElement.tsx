import React from 'react';
import {View, Text} from 'react-native';

const EpisodeListElement = ({item: {item}}: any) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.18)',
        marginBottom: 8,
        paddingVertical: 10,
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 17, color: '#8aedb3', marginHorizontal: 10}}>
        {item?.name}
      </Text>
    </View>
  );
};

export default EpisodeListElement;
