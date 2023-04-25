import { View, Text, ViewProps } from 'react-native';

import { styles } from './style';
import React from 'react';

export function Heading() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                AS MELHORES  <Text style={{ color: "#DCAA7B" }}>RECEITAS</Text> DE UM JEITO MAIS <Text style={{ color: "#DCAA7B" }}>FACIL</Text>
            </Text>
        </View>
    );
}