import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {colors} from '../../constants/colors/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {ButtonCustom} from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../router/screen-name';
import {Section} from '../../components/section';
import {TextCustom} from '../../components/text-custom';
import {useRecoilValue} from 'recoil';
import {themeState} from '../../utils/state';

export const CreateNewPin = () => {
  const navigation = useNavigation();
  const theme = useRecoilValue(themeState);
  return (
    <Section style={styles.container}>
      <View style={styles.head}>
        <AppBarCustom
          iconLeft={faArrowLeft}
          onPress={() => {}}
          title={titles.create_pin}
        />
      </View>
      <View style={styles.wrapper}>
        <TextCustom style={styles.title}>{titles.add_pin_number}</TextCustom>
        <OTPInputView
          pinCount={4}
          style={styles.code}
          secureTextEntry={true}
          codeInputFieldStyle={[
            styles.codeBack,
            {
              backgroundColor: theme
                ? colors.whiteBorder
                : colors.backgroundBorder,
              color: theme ? colors.black : colors.white,
            },
          ]}
          codeInputHighlightStyle={styles.codeFocus}
        />
      </View>
      <View style={styles.bottom}>
        <ButtonCustom
          title={titles.continue}
          backgroundColor={colors.main}
          titleColor={colors.white}
          onPress={() => {
            navigation.navigate(ScreenName.SetFingerprint);
          }}
        />
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flex: 0.15,
  },
  bottom: {
    flex: 0.15,
    marginHorizontal: 16,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    width: 280,
    textAlign: 'center',
    flex: 0.1,
    marginTop: 100,
  },
  code: {
    width: '80%',
    flex: 0.2,
  },
  codeBack: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    width: 68,
    height: 52,
    fontSize: 30,
  },
  codeFocus: {
    borderColor: colors.main,
    color: colors.white,
  },
});
