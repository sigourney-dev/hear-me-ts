import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type Props = {
    iconLeft?: any,
    iconRight?: any,
    hiddenText: string
}

export const TextInputCustom = (props: Props) => {
    const {iconLeft, iconRight, hiddenText} = props;

    return (
        <View style={styles.container}>
            <View>
            {
                iconLeft ? 
                (
                    <FontAwesomeIcon icon={iconLeft} size={16} style={styles.iconLeft}/>
                ) : null
            }
            <TextInput placeholder={hiddenText}/>
            </View>
            {
                iconRight ? 
                (
                    <FontAwesomeIcon icon={iconRight} size={16} style={styles.iconRight}/>
                ) : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    iconRight: {

    },
    iconLeft: {

    }
})