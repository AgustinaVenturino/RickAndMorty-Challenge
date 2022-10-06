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
  },
  budgetContainer: {
    minWidth: '100%',
    minHeight: 45,
    maxHeight: 45,
    marginTop: 5,
  },
  infoContainer: {
    minWidth: '40%',
    maxWidth: '50%',
    alignItems: 'center',
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
  originText: {
    fontSize: 15,
    color: '#8aedb3',
  },
  episode: {
    fontSize: 20,
    color: '#8aedb3',
    backgroundColor: 'rgba(0, 0, 0, 0.48)',
    marginTop: 14,
    paddingVertical: 10,
    paddingLeft: 10,
  },
});

export default styles;
