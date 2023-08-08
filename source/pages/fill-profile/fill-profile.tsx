import React, {SetStateAction, useCallback, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft, faSquarePen} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {TextInputCustom} from '../../components/text-input';
import {faCalendarDays, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {ButtonCustom} from '../../components/button';
import {colors} from '../../constants/colors/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatDate} from '../../utils/helper';
import {MediaType, launchImageLibrary} from 'react-native-image-picker';
import {images} from '../../constants/images/images';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import KeyboardAvoidingWrapper from '../../components/keyboard-avoiding';
import {useNavigation} from '@react-navigation/native';
import {ScreenName} from '../../router/screen-name';
import {Section} from '../../components/section';
import {useRecoilValue} from 'recoil';
import {themeState} from '../../utils/state';

export const FillProfile = () => {
  const navigation = useNavigation();
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [day, setDay] = useState(formatDate(new Date()));
  const [imgSelected, setImgSelected] = useState();
  const theme = useRecoilValue(themeState);

  ///convert base64 to image
  const formatImage = (base64: any) => {
    return `data:image/jpg;base64,${base64}`;
  };

  const handleChooseImg = useCallback(() => {
    let options = {
      selectionLimit: 1,
      mediaType: 'photo' as MediaType,
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      if (res.assets) {
        // const img = formatImage(res.assets[0].base64);
        const img = Image.resolveAssetSource(res.assets[0]).uri;
        setImgSelected(img);
      }
    });
  }, []);

  const handleCalendar = () => {
    setVisibleCalendar(!visibleCalendar);
  };

  return (
    <Section style={styles.container}>
      <View style={styles.head}>
        <AppBarCustom
          iconLeft={faArrowLeft}
          onPress={() => {}}
          title={titles.fill_profile}
        />
      </View>
      <KeyboardAvoidingWrapper>
        <View style={styles.wrapper}>
          <View style={styles.avatar}>
            <Image
              source={imgSelected ? {uri: imgSelected} : images.avatar_default}
              resizeMode="cover"
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => {
                handleChooseImg();
              }}>
              <FontAwesomeIcon
                icon={faSquarePen}
                size={28}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TextInputCustom
            hiddenText={titles.full_name}
            onPressRight={() => {}}
            onChangeText={() => {}}
          />
          <TextInputCustom
            hiddenText={titles.nickname}
            onPressRight={() => {}}
            onChangeText={() => {}}
          />
          <TextInputCustom
            hiddenText={titles.dob}
            iconRight={faCalendarDays}
            onPressRight={() => {
              handleCalendar();
            }}
            value={day}
            onChangeText={() => {}}
          />
          <TextInputCustom
            hiddenText={titles.email}
            iconRight={faEnvelope}
            onPressRight={() => {}}
            onChangeText={() => {}}
          />
          <TextInputCustom
            countryPicker={true}
            hiddenText={titles.phone_number}
            onPressRight={() => {}}
            onChangeText={() => {}}
          />
        </View>
      </KeyboardAvoidingWrapper>
      <View style={styles.bottom}>
        <View style={styles.button}>
          <ButtonCustom
            title={titles.skip}
            backgroundColor={
              theme ? colors.backWhiteBorder : colors.backgroundBorder
            }
            titleColor={theme ? colors.main : colors.white}
            onPress={() => {}}
          />
        </View>

        <View style={styles.button}>
          <ButtonCustom
            title={titles.continue}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {
              navigation.navigate(ScreenName.CreateNewPin);
            }}
          />
        </View>
      </View>

      <DateTimePickerModal
        isVisible={visibleCalendar}
        mode="date"
        onConfirm={date => {
          setDay(formatDate(date));
          handleCalendar();
        }}
        onCancel={() => handleCalendar()}
      />
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
  avatar: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  iconWrapper: {
    position: 'absolute',
    top: 75,
    left: 75,
  },
  icon: {
    color: colors.main,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    flex: 0.2,
  },
  button: {
    marginTop: 42,
    flex: 0.49,
  },
});
