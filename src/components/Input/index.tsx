import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './style';

interface InputProps extends TextInputProps {
    label: string;
}

export function Input({ label, ...rest }: InputProps) {
    const [text, onChangeText] = React.useState('');

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Insira o ingrediente'
        />
    );
}
