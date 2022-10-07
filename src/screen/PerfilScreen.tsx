import React, {useContext, useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from '../context/Auth/AuthContext';
import {Text, Image, View, Keyboard, EmitterSubscription} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {UpdateUserData} from '../interfaces/authInterface';
import {EBackgroundColor} from '../enums/EStyles';
import Button from '../components/common/Button';
import styles from '../theme/perfilTheme';

const PerfilScreen = () => {
  const {userData, updateUserData} = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<UpdateUserData>({
    defaultValues: {
      name: userData?.name || '',
      surname: userData?.surname || '',
      phone: userData?.phone || '',
      age: userData?.age || '',
    },
  });
  const onSubmit = (data: UpdateUserData) => updateUserData(data);

  const [keyboardShown, setKeyboardShown] = useState(false);
  let keyboardDidShowListener: EmitterSubscription,
    keyboardDidHideListener: EmitterSubscription;
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
  }, [userData]);

  const keyboardDidShow = () => {
    setKeyboardShown(true);
  };
  const keyboardDidHide = () => {
    setKeyboardShown(false);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.container}>
        {!keyboardShown && (
          <View style={styles.headerContainer}>
            <Image
              style={styles.avatarImage}
              source={require('../assets/avatarperfil.png')}
            />
            {userData && (
              <View style={{flexDirection: 'row'}}>
                <Text style={{...styles.title, fontSize: 30}}>
                  {userData?.name + ' '}
                </Text>
                <Text style={{...styles.title, fontSize: 30}}>
                  {userData?.surname}
                </Text>
              </View>
            )}
          </View>
        )}
        <View style={styles.row}>
          <Text style={styles.subTitle}>Name:</Text>
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
              />
            )}
            name="name"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Surname:</Text>
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
              />
            )}
            name="surname"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Phone:</Text>
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
              />
            )}
            name="phone"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Age:</Text>
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
              />
            )}
            name="age"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Actualizar"
            color={EBackgroundColor.lightBlue}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        {!keyboardShown && (
          <Image
            style={styles.perfilImage}
            source={require('../assets/rickmortyperfil.png')}
          />
        )}
      </View>
    </View>
  );
};

export default PerfilScreen;
