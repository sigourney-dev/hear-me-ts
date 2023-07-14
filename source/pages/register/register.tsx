import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {ButtonCustom} from '../../components/button';
import {AppBarCustom} from '../../components/app-bar';
import {
  faArrowLeft,
  faEyeSlash,
  faEye,
  faLock,
  faPaperPlane,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';
import {images} from '../../constants/images/images';
import {titles} from '../../constants/titles/titles';
import {colors} from '../../constants/colors/colors';
import {TextInputCustom} from '../../components/text-input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screen = Dimensions.get('window');

type Props = {
  icon: any;
  onPress: Function;
  color: any;
};

const LogoBox = (props: Props) => {
  const {icon, onPress, color} = props;

  return (
    <TouchableOpacity
      style={styles.logoBox}
      onPress={() => {
        onPress();
      }}>
      <FontAwesomeIcon icon={icon} size={24} color={color} />
    </TouchableOpacity>
  );
};

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [hiddenPass, setHiddenPass] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      <AppBarCustom iconLeft={faArrowLeft} onPress={() => {}} />
      <View style={styles.wrapper}>
        <Image
          source={images.icon_music}
          resizeMode={'cover'}
          style={styles.image}
        />
        <Text style={styles.titleHeader}>{titles.create_account}</Text>
        <View>
          <TextInputCustom
            hiddenText={titles.email}
            iconLeft={faPaperPlane}
            onPressRight={() => {}}
          />
          <TextInputCustom
            hiddenText={titles.password}
            iconLeft={faLock}
            iconRight={hiddenPass ? faEyeSlash : faEye}
            onPressRight={() => {
              setHiddenPass(!hiddenPass);
            }}
            secureTextEntry={hiddenPass}
          />
        </View>
        <TouchableOpacity
          style={styles.remember}
          onPress={() => {
            setIsSelected(!isSelected);
          }}>
          <FontAwesomeIcon
            icon={isSelected ? faSquareCheck : faSquare}
            color={colors.main}
            size={24}
            style={styles.iconRemember}
          />
          <Text style={styles.textRemember}>{titles.remember_me}</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <ButtonCustom
            title={titles.sign_up}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {
              navigation.navigate('FillProfile')
            }}
          />
        </View>
        <View style={styles.borderDivide}>
          <View style={styles.divide} />
          <Text style={styles.textDivide}>{titles.or_continue_with}</Text>
          <View style={styles.divide}></View>
        </View>

        <View style={styles.wrapperLogo}>
          <LogoBox icon={faFacebook} onPress={() => {}} color={colors.fb} />
          <LogoBox icon={faGoogle} onPress={() => {}} color={colors.red} />
          <LogoBox icon={faApple} onPress={() => {}} color={colors.gray} />
        </View>

        <View style={styles.textBottom}>
          <Text style={styles.textDescription}>{titles.have_account}</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('LoginScreen')}}>
            <Text style={styles.textSign}> {titles.sign_in}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  image: {
    width: screen.width / 3,
    height: screen.width / 3,
    marginTop: 48,
  },
  titleHeader: {
    fontSize: 32,
    color: colors.white,
    fontWeight: '600',
    marginTop: 44,
  },
  remember: {
    flexDirection: 'row',
    marginTop: 24,
  },
  textRemember: {
    color: colors.white,
  },
  iconRemember: {
    marginTop: -3,
    marginRight: 12,
  },
  button: {
    marginTop: 24,
  },
  borderDivide: {
    flexDirection: 'row',
    marginVertical: 32,
  },
  divide: {
    borderBottomColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 0.5,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  textDivide: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  logoBox: {
    borderWidth: 0.4,
    borderColor: colors.border,
    backgroundColor: colors.backgroundBorder,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  wrapperLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screen.width - 120,
  },
  textBottom: {
    flexDirection: 'row',
    marginTop: 24,
  },
  textDescription: {
    color: colors.white,
  },
  textSign: {
    color: colors.main,
  },
});
