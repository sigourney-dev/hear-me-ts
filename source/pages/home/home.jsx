import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go to Splash' onPress={() => {
                navigation.navigate('SplashScreen')
            }}/>
        </View>
    );
}