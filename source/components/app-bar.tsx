import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../constants/colors/colors";
import { useNavigation } from "@react-navigation/native";

type Props = {
    iconLeft: any,
    iconRight?: any,
    title?: String,
    onPress: Function,
}

export const AppBarCustom = (props: Props) => {
    const {iconLeft, iconRight, title, onPress} = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <FontAwesomeIcon icon={iconLeft} style={styles.iconLeft} size={20}/>
                </TouchableOpacity>
                {
                    title ? <Text style={styles.title}>{title}</Text> : null
                }
            </View>
            <View>
                {
                    iconRight ? (
                        <TouchableOpacity onPress={() => {onPress()}}>
                        <FontAwesomeIcon icon={iconRight} style={styles.iconLeft}/>
                        </TouchableOpacity>
                    )
                    : null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    left: {
        flexDirection: "row",
    },
    title: {
        color: colors.white,
        marginLeft: 12,
        fontWeight: "700",
        fontSize: 20,
        marginTop: 2
    },
    iconLeft: {
        color: colors.white,
        marginTop: 4,
    }
});