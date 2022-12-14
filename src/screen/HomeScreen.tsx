import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/common/Button';
import CharacterPoster from '../components/common/CharacterPoster';
import RickMortyContext from '../context/RickandMorty/RickMortyContext';
import {scrollToTop} from '../helpers/scroll';
import {Result} from '../interfaces/rickMortyInterface';
import styles from '../theme/homeTheme';
import {EBackgroundColor} from '../enums/EStyles';
import {AuthContext} from '../context/Auth/AuthContext';

interface Props extends StackScreenProps<any, any> {}
const HomeScreen = ({navigation}: Props) => {
  const backgroundUrl = '../assets/6538958_1459.jpg';
  const scrollRef = React.createRef<ScrollView>();
  const {characters, getCharacters, prevPage, nextPage} =
    useContext(RickMortyContext);
  const {validateUser, userData} = useContext(AuthContext);

  useEffect(() => {
    getCharacters();
    if (!userData) {
      validateUser();
    }
  }, []);

  const goToDetails = (character: Result) => {
    navigation.navigate('DetailsScreen', {character});
  };

  const goToNextPage = () => {
    getCharacters(nextPage);
    scrollToTop(scrollRef);
  };
  const goToPrevPage = () => {
    getCharacters(prevPage);
    scrollToTop(scrollRef);
  };

  return (
    <ScrollView nestedScrollEnabled={true} ref={scrollRef}>
      <ImageBackground
        source={require(backgroundUrl)}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.container}>
          {characters.length > 0 &&
            characters.map(character => (
              <View key={character.id} style={styles.characterContainer}>
                <CharacterPoster
                  character={character}
                  goToDetails={goToDetails}
                />
              </View>
            ))}
        </View>
        <View style={styles.pagination}>
          {!!prevPage && (
            <Button
              title="Prev Page"
              color={EBackgroundColor.lightBlue}
              onPress={goToPrevPage}
              customStyles={styles.button}
            />
          )}
          {!!nextPage && (
            <Button
              title="Next Page"
              color={EBackgroundColor.lightBlue}
              onPress={goToNextPage}
              customStyles={styles.button}
            />
          )}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;
