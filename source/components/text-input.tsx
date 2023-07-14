import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../constants/colors/colors';

type Props = {
  iconLeft?: any;
  iconRight?: any;
  hiddenText: string;
  numberOfLine?: number;
  onPressRight: Function;
  secureTextEntry?: boolean;
};

const screen = Dimensions.get('window');

export const TextInputCustom = (props: Props) => {
  const {
    iconLeft,
    iconRight,
    hiddenText,
    numberOfLine,
    onPressRight,
    secureTextEntry
  } = props;
  const [colorTextFocus, setColorTextFocus] = useState(colors.grayIcon);
  const [colorBorder, setColorBorder] = useState('');
  const [colorIcon, setColorIcon] = useState(colors.grayIcon);

  return (
    <View
      style={[
        styles.container,
        colorBorder ? {borderColor: colorBorder, borderWidth: 0.5} : null,
      ]}>
      <View style={styles.left}>
        {iconLeft ? (
          <FontAwesomeIcon
            icon={iconLeft}
            size={16}
            style={styles.iconLeft}
            color={colorTextFocus == colors.grayIcon ? colorIcon : colorTextFocus}
          />
        ) : null}
        <TextInput
          placeholder={hiddenText}
          style={styles.textInput}
          numberOfLines={numberOfLine}
          placeholderTextColor={colors.grayIcon}
          selectionColor={colors.white}
          onFocus={() => {
            setColorTextFocus(colors.main);
            setColorBorder(colors.main);
          }}
          onBlur={() => {
            setColorTextFocus(colors.grayIcon);
            setColorBorder('');
          }}
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => {
            if(text.length > 0) {
                setColorIcon(colors.white);
            } else {
                setColorIcon(colors.grayIcon);
            }
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          onPressRight();
        }}>
        {iconRight ? (
          <FontAwesomeIcon
            icon={iconRight}
            size={16}
            style={styles.iconRight}
            color={colorTextFocus == colors.grayIcon ? colorIcon : colorTextFocus}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    backgroundColor: colors.backgroundBorder,
    width: screen.width - 32,
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  left: {
    flexDirection: 'row',
  },
  iconRight: {
  },
  iconLeft: {
    marginRight: 12,
  },
  textInput: {
    width: screen.width - 120,
    color: colors.white,
    fontWeight: '600',
  },
});
