import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CaretRight } from 'phosphor-react-native';

import { Background } from '../../components/Background';
import { Input } from '../../components/Input';
import recipesData from '../../../receitas.json';

import { styles } from './style';
import { THEME } from '../../theme';

export function Recipes() {
    const [recipe, setRecipe] = useState('');

    const searchRecipes = () => {
        const recipesArray = Object.values(recipesData);
        return recipesArray.filter(item => item.nome.toLowerCase().includes(recipe.toLowerCase()));
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>DIGITE O NOME DA RECEITA</Text>
                <Input
                    value={recipe}
                    onChangeText={setRecipe}
                />

                {searchRecipes().length > 0 && recipe && recipe != ' ' ?
                    <ScrollView>
                        <View style={styles.recipeList}>
                            {searchRecipes().map((item, index) => (
                                <View style={styles.recipeItem} key={index}>
                                    <Text style={styles.recipeText}>{index + 1}. {item.nome}</Text>
                                    <CaretRight size={44} />
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                    :
                    <Text style={{ fontSize: 18, width: '80%', fontFamily: THEME.FONT_FAMILY.LIGHT }}>Digite o nome de uma receita para pesquisar.</Text>
                }

            </SafeAreaView>
        </Background>
    );
}