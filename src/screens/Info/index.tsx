import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';
import { Background } from '../../components/Background';

export function Info() {
    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.howToUse}>
                    <Text style={styles.title}>
                        Como usar o App?
                    </Text>
                    <View style={styles.infos}>
                        <Text style={styles.info}>
                            Você pode pesquisar receitas usando  ingredientes especificos.
                        </Text>
                        <Text style={styles.info}>
                            Você pode pesquisar a receita diretamente pelo nome dela.
                        </Text>
                    </View>
                </View>
                <View style={styles.howToUse}>
                    <Text style={styles.title}>
                        Sobre Nós
                    </Text>
                    <View>
                        <Text style={styles.info}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </Text>
                    </View>
                </View>
            </View>
        </Background>
    );
}