import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {images} from '../../constants/images/images';
import {colors} from '../../constants/colors/colors';
import {ButtonCustom} from '../../components/button';
import {TextCustom} from '../../components/text-custom';
import {titles} from '../../constants/titles/titles';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import {Section} from '../../components/section';

export const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <Section>
      <View style={styles.container}>
        <ImageBackground
          source={images.splashScreen}
          resizeMode="cover"
          style={styles.images}
        />

        <Section style={styles.bottomTab}>
          <View style={styles.textContainer}>
            <Swiper
              activeDotStyle={styles.dot}
              activeDotColor={colors.main}
              dotColor={colors.gray}>
              <TextCustom style={styles.text}>
                <TextCustom>{titles.introduction}</TextCustom>
                <Text style={styles.logo}> {titles.hear_me} </Text>
                <TextCustom style={undefined}>{titles.now}</TextCustom>
              </TextCustom>
              <TextCustom style={styles.text}>{titles.have_nice}</TextCustom>
              <TextCustom style={styles.text}>{titles.rate_me}</TextCustom>
            </Swiper>
          </View>
          <View>
            <ButtonCustom
              title={titles.get_started}
              backgroundColor={colors.main}
              titleColor={colors.white}
              onPress={() => {
                navigation.navigate('TypesSignIn');
              }}
            />
          </View>
        </Section>
      </View>
    </Section>
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
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 0.85,
  },
  text: {
    fontSize: 40,
    marginTop: 50,
    textAlign: 'center',
    fontWeight: '700',
  },
  dot: {
    width: 20,
  },
  logo: {
    color: colors.main,
  },
});
