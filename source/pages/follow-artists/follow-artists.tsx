import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {ButtonCustom} from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../constants/colors/colors';
import {ScreenName} from '../../router/screen-name';
import {Section} from '../../components/section';
import {TextCustom} from '../../components/text-custom';
import {useRecoilValue} from 'recoil';
import {themeState} from '../../utils/state';

export const FollowArtists = () => {
  const navigation = useNavigation();
  const theme = useRecoilValue(themeState);
  return (
    <Section style={styles.container}>
      <View style={styles.head}>
        <AppBarCustom
          iconLeft={faArrowLeft}
          onPress={() => {}}
          title={titles.follow_artists}
        />
      </View>
      <View style={styles.wrapper}>
        <View>
          <TextCustom style={styles.title}>
            {titles.follow_description}
          </TextCustom>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
          <ButtonCustom
            title={titles.skip}
            backgroundColor={
              theme ? colors.backWhiteBorder : colors.backgroundBorder
            }
            titleColor={theme ? colors.main : colors.white}
            onPress={() => {
              navigation.navigate(ScreenName.BottomBar);
            }}
          />
        </View>
        <View style={styles.button}>
          <ButtonCustom
            title={titles.continue}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {
              navigation.navigate(ScreenName.BottomBar);
            }}
          />
        </View>
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
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'left',
    flex: 0.5,
    marginTop: 16,
  },
  bottom: {
    marginHorizontal: 16,
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 42,
    flex: 0.49,
  },
});
