import React from "react";
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";

const KeyboardAvoidingWrapper = ({children}: any) => {
    return (
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;