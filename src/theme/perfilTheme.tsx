import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 22,
    color: 'black',
    paddingLeft: 15,
  },
  button: {
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
    borderRadius: 40,
    borderBottomEndRadius: 40,
    marginTop: 10,
  },
  container: {
    flex: 1,
    marginTop: 15,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 150,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
  },
  input: {
    color: 'black',
    fontSize: 22,
    borderBottomColor: '#87CEEB',
    borderBottomWidth: 2,
    paddingBottom: 4,
    width: '70%',
    paddingTop: 0,
    marginTop: 0,
  },
  perfilImage: {
    width: 240,
    height: 200,
    position: 'absolute',
    bottom: 0,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 60,
    backgroundColor: 'rgba(224, 255, 255, 0.5)',
    marginVertical: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
