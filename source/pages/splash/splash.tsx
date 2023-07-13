import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {images} from '../../constants/images/images';
import {colors} from '../../constants/colors/colors';
import {ButtonCustom} from '../../components/button';
import {titles} from '../../constants/titles/titles';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

export const SplashScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.splashScreen}
        resizeMode="cover"
        style={styles.images}></ImageBackground>

      <View style={styles.bottomTab}>
        <View style={styles.textContainer}>
          <Swiper
            activeDotStyle={styles.dot}
            activeDotColor={colors.main}
            dotColor={colors.gray}>
            <Text style={styles.text}>
              <Text>{titles.introduction}</Text>
              <Text style={styles.logo}> {titles.hear_me} </Text>
              <Text>{titles.now}</Text>
            </Text>
            <Text style={styles.text}>{titles.have_nice}</Text>
            <Text style={styles.text}>{titles.rate_me}</Text>
          </Swiper>
        </View>
        <View>
          <ButtonCustom
            title={titles.get_started}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {navigation.navigate('TypesSignIn')}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    flex: 0.7,
  },
  bottomTab: {
    marginTop: -50,
    flex: 0.4,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 0.85,
  },
  text: {
    fontSize: 40,
    marginTop: 50,
    textAlign: 'center',
    color: colors.white,
    fontWeight: '700',
  },
  dot: {
    width: 20,
  },
  logo: {
    color: colors.main,
  },
});
