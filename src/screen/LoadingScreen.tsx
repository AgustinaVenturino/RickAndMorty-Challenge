import React, {useRef, useEffect} from 'react';
import {Animated, View, Text} from 'react-native';
import fadeIn from '../helpers/animations';
import styles from '../theme/loadingTheme';

const image = '../assets/loading.png';

const LoadingScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn(opacity);
  }, []);

  return (
    <View>
      <Animated.View
        style={{
          opacity: opacity,
        }}>
        <Animated.Image
          style={[
            styles.image,
            {
              opacity: opacity,
            },
          ]}
          source={require(image)}
        />
        <Text
          style={{
            fontSize: 28,
            textAlign: 'center',
            margin: 10,
          }}>
          Loading..
        </Text>
      </Animated.View>
    </View>
  );
};
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LoadingScreen />
    </View>
  );
};
