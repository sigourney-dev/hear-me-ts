import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppBarCustom} from '../../components/app-bar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {titles} from '../../constants/titles/titles';

export const SetFingerprint = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <AppBarCustom
          title={titles.set_fingerprint}
          iconLeft={faArrowLeft}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  head: {},
});
