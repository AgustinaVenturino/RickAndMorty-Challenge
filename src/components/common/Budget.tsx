import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle, Text} from 'react-native';
import mainStyles from '../../theme/appTheme';
import styles from '../../theme/budgetTheme';
import {EBackgroundColor} from '../../enums/EStyles';

interface IBudgetProps {
  onPress?: () => void;
  textKey?: string;
  textValue?: string;
  color?: EBackgroundColor;
  customContainerStyle?: StyleProp<ViewStyle> | undefined;
  customTextKeyStyle?: StyleProp<TextStyle> | undefined;
  customTextValueStyle?: StyleProp<TextStyle> | undefined;
  children?: React.ReactElement;
}

const Budget = ({
  textKey,
  textValue,
  customContainerStyle,
  customTextKeyStyle,
  customTextValueStyle,
  color,
}: IBudgetProps) => {
  return (
    <View
      style={[
        styles.container,
        color === EBackgroundColor.yellow && mainStyles.yellowBg,
        color === EBackgroundColor.lightBlue && mainStyles.lightBlueBg,
        color === EBackgroundColor.black && mainStyles.blackBg,
        color === EBackgroundColor.green && mainStyles.greenBg,
        customContainerStyle,
      ]}>
      <Text style={[styles.text, customTextKeyStyle]}>{textKey}: </Text>
      <Text style={[styles.text, customTextValueStyle]}>{textValue}</Text>
    </View>
  );
};

export default Budget;
