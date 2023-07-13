import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SplashScreen,
  HomeScreen,
  ExploreScreen,
  LibraryScreen,
  ProfileScreen,
  TypesSignIn,
  RegisterScreen
} from '../pages/index';
import { colors } from '../constants/colors/colors';
import { Theme } from 'react-native-elements';

const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DarkTheme,
    colors: {
      background: colors.background
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="TypesSignIn" component={TypesSignIn}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRouter;
