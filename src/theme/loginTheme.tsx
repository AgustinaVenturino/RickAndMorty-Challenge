import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    maxHeight: 260,
    backgroundColor: 'rgba(70, 69, 70, 0.81)',
    borderRadius: 50,
    paddingHorizontal: 18,
  },
  backgroundImage: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  input: {
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
});

export default styles;
