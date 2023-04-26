import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './style';

interface InputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

export function Input({ value, onChangeText, ...rest }: InputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder='Insira o ingrediente'
            value={value}
            onChangeText={onChangeText}
            {...rest}
        />
    );
}
