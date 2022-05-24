import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

import colors from '../config/colors';

export const AppButton = ({
    btnText,
    btnStyle,
    btnTextStyle,
    onPress,
    img,
    tintColor,
    disabled,
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.8}
            style={{ ...styles.btnStyle, ...btnStyle }}
            onPress={onPress}>
            {!!img ? (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        style={{
                            tintColor: tintColor,
                            width: moderateScale(25),
                            height: moderateScale(25),
                        }}
                        source={img}
                    />
                    <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>
                        {btnText}
                    </Text>
                </View>
            ) : (
                <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
            )}
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextStyle: {
        fontSize: scale(12),
        color: colors.white,
        textTransform: 'uppercase',
    },
});
