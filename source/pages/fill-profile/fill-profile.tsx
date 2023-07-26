import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft, faSquarePen} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {TextInputCustom} from '../../components/text-input';
import {
  faCalendarDays,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import {ButtonCustom} from '../../components/button';
import {colors} from '../../constants/colors/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatDate} from '../../utils/helper';
import {MediaType, launchImageLibrary} from 'react-native-image-picker';
import {images} from '../../constants/images/images';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export const FillProfile = () => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [day, setDay] = useState(formatDate(new Date()));
  const [imgSelected, setImgSelected] = useState();

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
    <View style={styles.container}>
      <View style={styles.head}>
        <AppBarCustom
          iconLeft={faArrowLeft}
          onPress={() => {}}
          title={titles.fill_profile}
        />
      </View>
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
            iconRight={faPaperPlane}
            onPressRight={() => {}}
            onChangeText={() => {}}
          />
          <TextInputCustom
            countryPicker={true}
            hiddenText={titles.phone_number}
            onPressRight={() => {}}
            onChangeText={() => {
            }}
          />
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
          <ButtonCustom
            title={titles.skip}
            backgroundColor={colors.backgroundBorder}
            titleColor={colors.white}
            onPress={() => {}}
          />
        </View>

        <View style={styles.button}>
          <ButtonCustom
            title={titles.continue}
            backgroundColor={colors.main}
            titleColor={colors.white}
            onPress={() => {}}
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
    </View>
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
    flex: 0.13,
  },
  button: {
    flex: 0.49,
  },
});
