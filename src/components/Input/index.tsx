import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './style';

interface InputProps extends TextInputProps {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

export function Input({ value, placeholder, onChangeText, ...rest }: InputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            keyboardType='default'
            onChangeText={(text) => {
                const regex = /^[\p{L} ]+$/u;
                if (regex.test(text) || text === '') {
                    onChangeText(text);
                }
            }}
            {...rest}
        />
    );
}
