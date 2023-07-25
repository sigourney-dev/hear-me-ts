import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {TextInputCustom} from '../../components/text-input';
import {
  faCalendarDays,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import {ButtonCustom} from '../../components/button';
import {colors} from '../../constants/colors/colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { formatDate } from '../../utils/helper';

export const FillProfile = () => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [day, setDay] = useState(formatDate(new Date));
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
        <TextInputCustom
          hiddenText={titles.full_name}
          onPressRight={() => {}}
        />
        <TextInputCustom hiddenText={titles.nickname} onPressRight={() => {}} />
        <TextInputCustom
          hiddenText={titles.dob}
          iconRight={faCalendarDays}
          onPressRight={() => {
            handleCalendar();
          }}
          value={day}
        />
        <TextInputCustom
          hiddenText={titles.email}
          iconRight={faPaperPlane}
          onPressRight={() => {}}
        />
        <TextInputCustom
          countryPicker={true}
          hiddenText={titles.phone_number}
          onPressRight={() => {}}
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
      onConfirm={(date) => {
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
    flex: 0.2,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
