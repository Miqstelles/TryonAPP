import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './style';
import { THEME } from '../../theme';
import { MagnifyingGlass } from 'phosphor-react-native';

interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    size: number;
    icon?: boolean;
}

export function Button({ title, size = 50, icon, ...rest }: ButtonProps) {
    const buttonStyles = StyleSheet.create({
        button: {
            backgroundColor: THEME.COLORS.BACKGROUND_100,
            borderRadius: 5,
            width: size,
            height: 45,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
    return (
        <TouchableOpacity style={buttonStyles.button} {...rest}>
            <Text style={styles.buttonText}>{title}</Text>
            {icon ? < MagnifyingGlass color={THEME.COLORS.CAPTION_500} size={32} /> : null}
        </TouchableOpacity>
    );
}