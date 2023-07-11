import React from "react";
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    HomeScreen,
    ExploreScreen,
    LibraryScreen,
    ProfileScreen
} from '../pages/index';

const AppRouter = () => {
    const Stack = createNativeStackNavigator();
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                    <Stack.Screen name='ExploreScreen' component={ExploreScreen} />
                    <Stack.Screen name='LibraryScreen' component={LibraryScreen} />
                    <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default AppRouter;