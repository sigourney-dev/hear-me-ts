import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/colors/colors';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGoogle,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import {images} from '../../constants/images/images';
import {titles} from '../../constants/titles/titles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { ButtonCustom } from '../../components/button';
import { useNavigation } from '@react-navigation/native';

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
        <Text style={styles.textOptions}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TypesSignIn = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppBarCustom iconLeft={faArrowLeft} onPress={() => {}}/>
      <View style={styles.wrapper}>
        <Image
          source={images.let_yoy_in}
          resizeMode="cover"
          style={styles.images}
        />
        <Text style={styles.titleHeader}>{titles.lets_you_in}</Text>
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
            <Text style={styles.textDivide}>{titles.or}</Text>
            <View style={styles.divide}></View>
        </View>

        <View style={styles.button}>
        <ButtonCustom title={titles.sign_in_pass} backgroundColor={colors.main} titleColor={colors.white} onPress={() => {}} />
        </View>

        <View style={styles.textBottom}>
            <Text style={styles.textDescription}>{titles.not_have_account}</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('RegisterScreen')}}>
                <Text style={styles.textSign}> {titles.sign_up}</Text>
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
  images: {
    width: (screen.width / 3) * 2,
    height: (screen.width / 3) * 2,
    marginLeft: 40,
  },
  titleHeader: {
    fontSize: 44,
    color: colors.white,
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
    backgroundColor: colors.backgroundBorder,
  },
  textOptions: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 3
  },
  iconOptions: {
    marginRight: 12,
  },
  borderDivide: {
    flexDirection: "row",
    marginVertical: 32
  },
  textDivide: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600"
  },
  divide: {
    borderBottomColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 0.5,
    marginHorizontal: 16,
    marginBottom: 10
  },
  textBottom: {
    flexDirection: 'row',
    marginTop: 24
  },
  textDescription: {
    color: colors.white,
  },
  textSign: {
    color: colors.main
  },
  button: {
    width: screen.width - 32
  }
});
