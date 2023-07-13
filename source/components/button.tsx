import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

type Props = {
    icon?: String,
    title: String,
    backgroundColor: any,
    titleColor: any,
    onPress: Function,
}

const screen = Dimensions.get("window");

export const ButtonCustom = (props: Props) => {
    const {icon, title, backgroundColor, titleColor, onPress} = props
    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
           <TouchableOpacity onPress={() => {onPress()}}>
           <Text style={[styles.title, {color: titleColor}]}>
                {title}
            </Text>
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        width: screen.width - 32
    },
    title: {
        textAlign: "center",
        fontWeight: "700",
        marginVertical: 16,
        fontSize: 18
    }
});