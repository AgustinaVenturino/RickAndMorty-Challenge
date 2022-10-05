import {ScrollView} from 'react-native-gesture-handler';

const scrollToTop = (scrollRef: React.RefObject<ScrollView>) => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
};
export {scrollToTop};
