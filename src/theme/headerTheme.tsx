import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRightButton: {
    paddingHorizontal: 0,
    marginTop: 0,
    marginRight: 5,
  },
  textRightButton: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 8,
  },
  containerLeftButton: {
    paddingHorizontal: 0,
    marginTop: 0,
    marginLeft: 5,
  },
  textLeftButton: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  homeScreenHeaderHomeImage: {width: 250, maxHeight: 60,},
  homeScreenHeaderImage: {width: 320, maxHeight: 80, marginTop:20},
  homeScreenHeaderContainer: {
    alignSelf: 'center',
  },
});

export default styles;
