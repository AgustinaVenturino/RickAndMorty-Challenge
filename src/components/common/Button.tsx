import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import mainStyles from '../../theme/appTheme';
import styles from '../../theme/buttonTheme';
import {EBackgroundColor} from '../../enums/EStyles';

interface IButtonProps {
  onPress: () => void;
  title: string;
  color?: EBackgroundColor;
  customStyles?: StyleProp<ViewStyle> | undefined;
  customTextStyles?: StyleProp<TextStyle> | undefined;
}

const Button = ({
  onPress,
  title = 'Iniciar Sesion',
  color = EBackgroundColor.black,
  customStyles,
  customTextStyles,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        color === EBackgroundColor.yellow && mainStyles.yellowBg,
        color === EBackgroundColor.lightBlue && mainStyles.lightBlueBg,
        color === EBackgroundColor.black && mainStyles.blackBg,
        color === EBackgroundColor.green && mainStyles.blackBg,
        customStyles && customStyles,
      ]}
      onPress={onPress}>
      <Text style={[styles.text, customTextStyles && customTextStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
