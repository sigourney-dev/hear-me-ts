import React from 'react';
import {DarkTheme, NavigationContainer, Theme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  SplashScreen,
  HomeScreen,
  ExploreScreen,
  LibraryScreen,
  ProfileScreen,
  TypesSignIn,
  RegisterScreen,
  LoginScreen,
  FillProfile,
  CreateNewPin,
  SetFingerprint,
  FollowArtists
} from '../pages/index';
import {colors} from '../constants/colors/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faGgCircle} from '@fortawesome/free-brands-svg-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.grayIcon,
        tabBarStyle: {
          height: 90,
          paddingTop: 12,
          paddingBottom: 32,
          backgroundColor: colors.backgroundBorder,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24
        },
        }}
      initialRouteName="HomeScreen"
      >
      <Tab.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faHome} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        component={ExploreScreen}
        name="ExploreScreen"
        options={{
          title: 'Explore',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faGgCircle} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        component={LibraryScreen}
        name="LibraryScreen"
        options={{
          title: 'Library',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faBook} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        component={ProfileScreen}
        name="ProfileScreen"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppRouter = () => {
  const MyTheme = {
    ...DarkTheme,
    colors: {
      background: colors.background,
    },
  } as Theme;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="TypesSignIn" component={TypesSignIn} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="BottomBar" component={BottomTab} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="FillProfile" component={FillProfile} />
          <Stack.Screen name="CreateNewPin" component={CreateNewPin} />
          <Stack.Screen name="SetFingerprint" component={SetFingerprint} />
          <Stack.Screen name="FollowArtists" component={FollowArtists} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRouter;
