import React, {useRef, useEffect} from 'react';
import {Animated, View, Text} from 'react-native';
import fadeIn from '../helpers/animations';
import styles from '../theme/loadingTheme';

const image = '../assets/loading.png';

const LoadingScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn(opacity, 820);
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
        <Text style={styles.text}>Loading..</Text>
      </Animated.View>
    </View>
  );
};
export default () => {
  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  );
};
