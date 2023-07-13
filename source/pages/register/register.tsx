import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions, TextInput
} from 'react-native';
import { ButtonCustom } from '../../components/button';
import { AppBarCustom } from '../../components/app-bar';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { images } from '../../constants/images/images';
import { titles } from '../../constants/titles/titles';
import { colors } from '../../constants/colors/colors';

const screen = Dimensions.get('window');

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <AppBarCustom iconLeft={faArrowLeft} />
            <View style={styles.wrapper}>
                
                <Image source={images.icon_music} resizeMode={"cover"} style={styles.image}/>
                <Text style={styles.titleHeader}>{titles.create_account}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: (screen.width / 3),
        height: (screen.width / 3),
        marginTop: 48
    },
    titleHeader: {
        fontSize: 32,
        color: colors.white,
        fontWeight: '600',
        marginTop: 44,
    }
});
