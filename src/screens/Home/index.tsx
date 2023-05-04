import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { CaretRight, Scroll, TrashSimple } from 'phosphor-react-native'
import { MagnifyingGlass } from 'phosphor-react-native';
import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background } from "../../components/Background";
import recipesData from '../../../receitas.json';

import { styles } from "./style";
import { THEME } from "../../theme";

export function Home() {
    const navigation = useNavigation()
    const [ingredient, setIngredient] = useState('')
    const [ingredients, setIngredients] = useState<string[]>([])

    const adicionarIngrediente = () => {
        if (ingredient !== '') {
            setIngredients([...ingredients, ingredient.toUpperCase()])
            setIngredient('')
        }
    };

    const [recipe, setRecipe] = useState(false)
    const filteredRecipes = recipesData.filter(recipe => {
        return ingredients.every(
            ingredient => recipe.ingredientes.some(
                recipeIngredient => recipeIngredient.toLowerCase()
                    .includes(ingredient.toLowerCase())))
    })

    return (
        <Background>

            <SafeAreaView style={styles.container}>
                {recipe === false || filteredRecipes.length === 0 ?
                    <>
                        <Text style={styles.title}>DIGITE SEU INGREDIENTE</Text>
                        <Input
                            placeholder="Insira seus ingredientes"
                            value={ingredient}
                            onChangeText={setIngredient}
                        />

                        <View style={styles.btn}>
                            <Button
                                title="ADICIONAR"
                                size={155}
                                onPress={adicionarIngrediente}
                            />
                            <Button
                                size={50}
                                icon={<MagnifyingGlass size={32} color={THEME.COLORS.CAPTION_500} />}
                                onPress={() => filteredRecipes.length > 0 && ingredients.length > 0 ? setRecipe(true) : setRecipe(false)}
                            />
                        </View>
                        <ScrollView style={styles.ingredients}>
                            {ingredients.map((item, index) => (
                                <View style={styles.ingredient} key={index + 1} >
                                    <Text style={{ color: THEME.COLORS.CAPTION_500, fontSize: 32, width: '80%', fontFamily: THEME.FONT_FAMILY.BOLD }} key={index}>• {item}</Text>
                                    <Button
                                        size={50}
                                        icon={<TrashSimple color={THEME.COLORS.CAPTION_500} size={32} />}
                                        onPress={() => {
                                            const newIngredients = [...ingredients];
                                            newIngredients.splice(index, 1)
                                            setIngredients(newIngredients)
                                        }}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </>
                    :
                    <>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', width: 170, alignItems: 'center', marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontFamily: THEME.FONT_FAMILY.BOLD }}>LIMPAR</Text>
                            <Button
                                size={50}
                                icon={<TrashSimple color={THEME.COLORS.CAPTION_500} size={32} />}
                                onPress={() => setRecipe(false)}
                            />
                        </View>
                        <ScrollView>
                            {recipe === true && ingredients.length > 0 && filteredRecipes.map((recipe, index) => (
                                <View style={styles.recipeList} key={index}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('recipe', {
                                            nome: recipe.nome,
                                            modoPreparo: recipe.modoPreparo,
                                            ingredientes: recipe.ingredientes,
                                        });
                                    }}>
                                        <View style={styles.recipeItem} key={index}>
                                            <Text style={styles.recipeText}>{index + 1}. {recipe.nome}</Text>
                                            <CaretRight size={44} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </>
                }
            </SafeAreaView>
        </Background>
    )
}