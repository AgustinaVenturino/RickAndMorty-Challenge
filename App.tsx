import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthProvider} from './src/context/Auth/AuthContext';
import {RickMortyProvider} from './src/context/RickandMorty/RickMortyContext';
import Navigator from './src/navigator/Navigator';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <AuthProvider>
      <RickMortyProvider>{children}</RickMortyProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
