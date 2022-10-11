import React, {useContext, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../components/common/Button';
import {AuthContext} from '../context/Auth/AuthContext';
import {EBackgroundColor} from '../enums/EStyles';
import {LoginData} from '../interfaces/authInterface';
import styles from '../theme/loginTheme';

const LoginScreen = () => {
  const {signUp, errorMessage, removeError} = useContext(AuthContext);

  const backgroundUrl = '../assets/rickandmorty.png';
  
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginData>({
    defaultValues: {
      mail: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginData) => {
    signUp(data);
  };

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Incorrect Login', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  return (
    <KeyboardAvoidingView style={styles.keyboard}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require(backgroundUrl)}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <View style={styles.container}>
            <Text style={styles.title}>WELCOME</Text>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 1,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={Keyboard.dismiss}
                  placeholderTextColor="white"
                  placeholder="Email"
                  textContentType="emailAddress"
                />
              )}
              name="mail"
            />
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 1,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={Keyboard.dismiss}
                  placeholderTextColor="white"
                  placeholder="Password"
                  secureTextEntry
                />
              )}
              name="password"
            />
            <Button
              color={EBackgroundColor.lightBlue}
              title="Iniciar Sesion"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
