import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './style';
import { THEME } from '../../theme';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    size: number;
}

export function Button({ title, size = 50, ...rest }: ButtonProps) {
    const buttonStyles = StyleSheet.create({
        button: {
            backgroundColor: THEME.COLORS.BACKGROUND_100,
            padding: 10,
            borderRadius: 5,
            width: size,
            height: 45,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
        },
    })
    return (
        <TouchableOpacity style={buttonStyles.button} {...rest}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}