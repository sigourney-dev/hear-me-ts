/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppRouter from './source/router/app-router';

const App = (): JSX.Element => {
  return (
   <MenuProvider>
    <AppRouter/>
   </MenuProvider>
  );
}

export default App;
