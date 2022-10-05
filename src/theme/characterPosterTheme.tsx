import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 280,
    maxWidth: 280,
    height: 330,
    maxHeight: 330,
    borderRadius: 20,
  },
  backgroundImage: {
    width: 280,
    maxWidth: 280,
    height: 250,
    maxHeight: 250,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  image: {
    width: 210,
    height: 210,
    borderRadius: 100,
    position: 'absolute',
    top: 47,
  },
  textContainer: {
    flex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    height: 80,
    maxHeight: 80,
    maxWidth: 300,
    zIndex: 1,
  },
  status: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  alive: {
    backgroundColor: 'green',
  },
  dead: {
    backgroundColor: 'red',
  },
  unknow: {
    backgroundColor: 'yellow',
  },
  name: {
    fontSize: 25,
    color: 'rgba(130, 216, 232, 0.81)',
    fontWeight: 'bold',
  },
  species: {
    fontSize: 14,
    color: 'black',
  },
});

export default styles;
