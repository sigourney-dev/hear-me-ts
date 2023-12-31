import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableHighlight,
  PanResponder,
} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {colors} from '../../constants/colors/colors';
import {ButtonCustom} from '../../components/button';
import {images} from '../../constants/images/images';
import TouchID from 'react-native-touch-id';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../router/screen-name';
import {Section} from '../../components/section';
import {TextCustom} from '../../components/text-custom';
import {useRecoilValue} from 'recoil';
import {themeState} from '../../utils/state';

export const SetFingerprint = () => {
  const navigation = useNavigation();
  const theme = useRecoilValue(themeState);
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const optionalConfigObject = {
    title: 'Authentication Required',
    color: colors.main,
    fallbackLabel: 'Show Passcode',
  };

  const handleTouchID = () => {
    TouchID.authenticate('handle Face ID', optionalConfigObject)
      .then((success: any) => Alert.alert('Successfully'))
      .catch((error: any) => Alert.alert('Failed'));
  };

  const handleGetPosition = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,
    onPanResponderRelease: (event, gestureState) => {
      //After the change in the location
      setLocationX(event.nativeEvent.locationX.toFixed(2));
      setLocationY(event.nativeEvent.locationY.toFixed(2));
    },
  });

  return (
    <Section style={styles.container}>
      <View style={styles.head}>
        <AppBarCustom
          title={titles.set_fingerprint}
          iconLeft={faArrowLeft}
          onPress={() => {}}
        />
      </View>
      <View style={styles.wrapper}>
        <TextCustom style={styles.title}>{titles.add_fingerprint}</TextCustom>
        {/* <View {...handleGetPosition.panHandlers}> */}
        <TouchableHighlight
          onPress={() => {
            handleTouchID();
          }}>
          <Image source={images.fingerprint} />
        </TouchableHighlight>
        {/* </View> */}
        <TextCustom style={styles.title}>
          {titles.ask_add_fingerprint}
        </TextCustom>
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
              navigation.navigate(ScreenName.FollowArtists);
            }}
          />
        </View>
        <View style={styles.button}>
          <ButtonCustom
            title={titles.continue}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {
              navigation.navigate(ScreenName.FollowArtists);
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
    width: 280,
    textAlign: 'center',
    flex: 0.5,
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
