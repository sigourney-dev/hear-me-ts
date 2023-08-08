import React from 'react';
import {useRecoilValue} from 'recoil';
import {Text} from 'react-native';
import {colors} from '../constants/colors/colors';
import {themeState} from '../utils/state';

type Props = {
  children: any;
  style?: any;
};

export const TextCustom = (props: Props) => {
  const {children, style} = props;
  const isLightMode = useRecoilValue(themeState);
  return (
    <Text style={[style, {color: isLightMode ? colors.black : colors.white}]}>
      {children}
    </Text>
  );
};
