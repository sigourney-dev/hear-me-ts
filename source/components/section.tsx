import React from 'react';
import {useRecoilValue} from 'recoil';
import {View, StyleSheet} from 'react-native';
import {colors} from '../constants/colors/colors';
import {themeState} from '../utils/state';

type Props = {
  children: any;
  style?: any;
};

export const Section = (props: Props) => {
  const isLightMode = useRecoilValue(themeState);
  const {children, style} = props;
  return (
    <View
      style={[
        style ? style : styles.sectionContainer,
        {
          backgroundColor: isLightMode ? colors.white : colors.background,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
