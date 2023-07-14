import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';
import {TextInputCustom} from '../../components/text-input';
import { faCalendarDays, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export const FillProfile = () => {
  return (
    <View style={styles.container}>
      <AppBarCustom
        iconLeft={faArrowLeft}
        onPress={() => {}}
        title={titles.fill_profile}
      />
      <View style={styles.wrapper}>
        <TextInputCustom
          hiddenText={titles.full_name}
          onPressRight={() => {}}
        />
         <TextInputCustom
          hiddenText={titles.nickname}
          onPressRight={() => {}}
        />
         <TextInputCustom
          hiddenText={titles.dob}
          iconRight={faCalendarDays}
          onPressRight={() => {}}
        />
         <TextInputCustom
          hiddenText={titles.email}
          iconRight={faPaperPlane}
          onPressRight={() => {}}
        />
         <TextInputCustom
          hiddenText={titles.phone_number}
          onPressRight={() => {}}
        />
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
});
