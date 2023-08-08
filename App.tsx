/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {RecoilRoot} from 'recoil';
import AppRouter from './source/router/app-router';

const App = (): JSX.Element => {
  return (
    <MenuProvider>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </MenuProvider>
  );
};

export default App;
