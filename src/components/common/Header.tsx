import React from 'react';
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

interface IHeaderProps {
  withImage?: boolean;
  withText?: boolean;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<ViewStyle> | undefined;
  imageStyle?: StyleProp<ImageStyle> | undefined;
  requireImg: ImageSourcePropType | undefined;
}
const Header = ({
  withImage,
  withText,
  containerStyle,
  textStyle,
  imageStyle,
  requireImg,
}: IHeaderProps) => {
  return (
    <View style={containerStyle}>
      {withImage && <Image source={requireImg} style={imageStyle} />}
      {withText && <Text style={textStyle}>Header</Text>}
    </View>
  );
};

export default Header;
