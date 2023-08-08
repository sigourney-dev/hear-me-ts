import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors} from '../../constants/colors/colors';
import {AppBarCustom} from '../../components/app-bar';
import {TextCustom} from '../../components/text-custom';
import {Section} from '../../components/section';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {images} from '../../constants/images/images';
import {titles} from '../../constants/titles/titles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ButtonCustom} from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../router/screen-name';
import {useRecoilState} from 'recoil';
import {themeState} from '../../utils/state';

const screen = Dimensions.get('window');

type Props = {
  title: string;
  icon: any;
  color: any;
};

const Options = (props: Props) => {
  const {title, icon, color} = props;

  return (
    <TouchableOpacity>
      <View style={styles.options}>
        <FontAwesomeIcon
          icon={icon}
          style={[styles.iconOptions]}
          size={24}
          color={color}
        />
        <TextCustom style={styles.textOptions}>{title}</TextCustom>
      </View>
    </TouchableOpacity>
  );
};

export const TypesSignIn = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <Section style={styles.container}>
      <AppBarCustom iconLeft={faArrowLeft} onPress={() => {}} />
      <View style={styles.wrapper}>
        <Image
          source={images.let_yoy_in}
          resizeMode="cover"
          style={styles.images}
        />
        <TextCustom style={styles.titleHeader}>{titles.lets_you_in}</TextCustom>
        <Options
          title={titles.continue_with_fb}
          icon={faFacebook}
          color={colors.fb}
        />
        <Options
          title={titles.continue_with_Gg}
          icon={faGoogle}
          color={colors.red}
        />
        <Options
          title={titles.continue_with_Ap}
          icon={faApple}
          color={colors.gray}
        />
        <View style={styles.borderDivide}>
          <View style={styles.divide} />
          <TextCustom style={styles.textDivide}>{titles.or}</TextCustom>
          <View style={styles.divide} />
        </View>

        <View style={styles.button}>
          <ButtonCustom
            title={titles.sign_in_pass}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {
              // navigation.navigate(ScreenName.LoginScreen);
              setTheme(!theme);
            }}
          />
        </View>

        <View style={styles.textBottom}>
          <TextCustom>{titles.not_have_account}</TextCustom>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ScreenName.RegisterScreen);
            }}>
            <Text style={styles.textSign}> {titles.sign_up}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  images: {
    width: (screen.width / 3) * 2,
    height: (screen.width / 3) * 2,
    marginLeft: 40,
  },
  titleHeader: {
    fontSize: 44,
    fontWeight: '700',
    marginTop: 12,
  },
  options: {
    width: screen.width - 32,
    marginTop: 16,
    flexDirection: 'row',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
    paddingHorizontal: screen.width / 4 - 12,
    borderRadius: 8,
  },
  textOptions: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 3,
  },
  iconOptions: {
    marginRight: 12,
  },
  borderDivide: {
    flexDirection: 'row',
    marginVertical: 32,
  },
  textDivide: {
    fontSize: 16,
    fontWeight: '600',
  },
  divide: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 0.5,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  textBottom: {
    flexDirection: 'row',
    marginTop: 24,
  },
  textSign: {
    color: colors.main,
  },
  button: {
    width: screen.width - 32,
  },
});
