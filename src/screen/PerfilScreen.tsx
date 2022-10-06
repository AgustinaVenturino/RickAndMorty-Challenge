import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/Auth/AuthContext';
import {Text, Image, View, Keyboard, EmitterSubscription} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';
import {UpdateUserData} from '../interfaces/authInterface';
import {EBackgroundColor} from '../enums/EStyles';
import Button from '../components/common/Button';
import styles from '../theme/perfilTheme';

const PerfilScreen = () => {
  const {
    userData,
    updateUserData,
    validateUser,
    successMessage,
    removeSuccessMessage,
  } = useContext(AuthContext);
  const {name, surname, phone, age, onChange} = useForm({
    name: userData?.name || '',
    surname: userData?.surname || '',
    phone: userData?.phone || '',
    age: userData?.age || '',
  });
  const [keyboardShown, setKeyboardShown] = useState(false);
  let keyboardDidShowListener: EmitterSubscription,
    keyboardDidHideListener: EmitterSubscription;
  useEffect(() => {
    // if (successMessage?.length === 0) return;
    // Alert.alert('Update User Information', successMessage, []);
    // setTimeout(() => {
    //   removeSuccessMessage();
    // }, 20);
    if (!userData) {
      getUserData();
    }
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
  }, [userData]);
  const getUserData = () => {
    validateUser();
  };
  const keyboardDidShow = () => {
    setKeyboardShown(true);
  };
  const keyboardDidHide = () => {
    setKeyboardShown(false);
  };

  const handleOnUpdate = () => {
    const newUserData: UpdateUserData = {
      name,
      surname,
      phone,
      age,
    };
    updateUserData(newUserData);
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
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Surname:</Text>
          <TextInput
            style={styles.input}
            placeholder="Surname"
            onChangeText={value => onChange(value, 'surname')}
            value={surname}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            onChangeText={value => onChange(value, 'phone')}
            value={phone}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={value => onChange(value, 'age')}
            value={age}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Actualizar"
            color={EBackgroundColor.lightBlue}
            onPress={handleOnUpdate}
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
