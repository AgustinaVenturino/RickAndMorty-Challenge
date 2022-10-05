import React, {useContext, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  Keyboard,
  Alert,
} from 'react-native';
import Button from '../components/common/Button';
import {AuthContext} from '../context/Auth/AuthContext';
import {EBackgroundColor} from '../enums/EStyles';
import useForm from '../hooks/useForm';
import styles from '../theme/loginTheme';

const LoginScreen = () => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);
  const backgroundUrl = '../assets/rickandmorty.png';

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Incorrect Login', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const logIn = () => {
    Keyboard.dismiss();
    signUp({mail: email, password: 'Rnc.0987'});
  };

  return (
    <>
      <ImageBackground
        source={require(backgroundUrl)}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>BIENVENIDO</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="white"
            placeholder="Contraseña"
            textContentType="password"
            secureTextEntry
            onChangeText={value => onChange(value, 'password')}
            value={password}
          />
          <Button
            color={EBackgroundColor.lightBlue}
            title="Iniciar Sesion"
            onPress={logIn}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
