import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Background } from '../../components/Background';

interface RecipeDetailsRouteParams {
    nome: string;
    ingredientes: string[];
    modoPreparo: string[];
}

export function RecipeDetails() {
    const route = useRoute<RouteProp<Record<string, RecipeDetailsRouteParams>, string>>();
    const { nome, ingredientes, modoPreparo } = route.params;

    const [option, setOption] = useState('ingrediente')

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>{nome}</Text>

                <View style={styles.options}>
                    <Text style={option == 'ingrediente' ? styles.optionsTextSelected : styles.optionsText} onPress={() => setOption('ingrediente')}>Ingredientes</Text>
                    <Text style={option == 'preparo' ? styles.optionsTextSelected : styles.optionsText} onPress={() => setOption('preparo')}>Preparo</Text>
                </View>

                <View>
                    <ScrollView style={{ maxHeight: 282 }} >
                        {option === 'ingrediente' ?
                            <Text style={styles.ingrediente}>{ingredientes.join(', ').replace(/,/g, ',\n')}</Text>
                            :
                            <Text style={styles.ingrediente}>{modoPreparo.join('\n')}</Text>
                        }
                    </ScrollView>
                </View>

            </View >
        </Background>
    );
}
