import {Animated} from 'react-native';

const fadeIn = (opacity: Animated.Value) => {
  Animated.loop(
    Animated.timing(opacity, {
      toValue: 1,
      duration: 820,
      useNativeDriver: true,
    }),
  ).start();
};

export default fadeIn;
