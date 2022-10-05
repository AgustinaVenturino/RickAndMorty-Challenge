import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.88)',
    flex: 1,
  },
  containerImage: {
    flex: 1,
    alignItems: 'center',
    maxHeight: '38%',
  },
  image: {
    width: 210,
    height: 210,
    borderRadius: 100,
    marginTop: 10,
  },
  characterInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    width: '50%',
    marginBottom: 20,
  },
  leftRadius: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 30,
    color: '#8aedb3',
  },
});

export default styles;
