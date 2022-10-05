import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import {AuthContext} from '../context/Auth/AuthContext';
import LoadingScreen from '../screen/LoadingScreen';
import {Result} from '../interfaces/rickMortyInterface';
import PerfilScreen from '../screen/PerfilScreen';
import Header from '../components/common/Header';
import styles from '../theme/headerTheme';
import Button from '../components/common/Button';
import {EBackgroundColor} from '../enums/EStyles';

const Stack = createStackNavigator();
export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Result;
};

const Navigator = () => {
  const {status, logOut} = useContext(AuthContext);
  if (status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status === 'authenticated' ? (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({navigation}) => ({
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Header
                  withImage
                  imageStyle={styles.homeScreenHeaderHomeImage}
                  containerStyle={styles.homeScreenHeaderContainer}
                  requireImg={require('../assets/dlf.pt-rick-and-morty-logo-350447.png')}
                />
              ),
              headerRight: () => (
                <Button
                  title="Profile"
                  color={EBackgroundColor.black}
                  onPress={() => navigation.navigate('PerfilScreen')}
                  customStyles={styles.containerRightButton}
                  customTextStyles={styles.textRightButton}
                />
              ),
              headerLeft: () => (
                <Button
                  title="Logout"
                  color={EBackgroundColor.black}
                  onPress={() => logOut()}
                  customStyles={styles.containerLeftButton}
                  customTextStyles={styles.textLeftButton}
                />
              ),

              headerStyle: {
                height: 60,
                backgroundColor: 'rgba(0, 0, 0, 0.82)',
              },
            })}
          />
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Header
                  withImage
                  imageStyle={styles.homeScreenHeaderHomeImage}
                  containerStyle={styles.homeScreenHeaderContainer}
                  requireImg={require('../assets/dlf.pt-rick-and-morty-logo-350447.png')}
                />
              ),
              headerStyle: {
                height: 60,
                backgroundColor: 'rgba(0, 0, 0, 0.82)',
              },
            }}
          />
          <Stack.Screen
            name="PerfilScreen"
            component={PerfilScreen}
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Header
                  withImage
                  imageStyle={styles.homeScreenHeaderImage}
                  containerStyle={styles.homeScreenHeaderContainer}
                  requireImg={require('../assets/rickAndMortyHeader.png')}
                />
              ),
              headerStyle: {
                height: 60,
                backgroundColor: '#B7E4F9FF',
              },
            }}
          />
        </>
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
