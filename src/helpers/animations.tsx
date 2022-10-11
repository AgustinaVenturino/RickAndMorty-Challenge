import {Animated} from 'react-native';

const fadeIn = (opacity: Animated.Value, duration:number=1000) => {
  Animated.loop(
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }),
  ).start();
};

export default fadeIn;
