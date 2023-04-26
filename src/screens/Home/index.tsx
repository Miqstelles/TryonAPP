import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TrashSimple } from 'phosphor-react-native'
import { MagnifyingGlass } from 'phosphor-react-native';


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background } from "../../components/Background";

import { styles } from "./style";
import { useState } from "react";
import { THEME } from "../../theme";

export function Home() {
    const navigation = useNavigation()
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);

    const adicionarIngrediente = () => {
        if (ingredient !== '') {
            setIngredients([...ingredients, ingredient.toUpperCase()]);
            setIngredient('');
        }
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>DIGITE SEU INGREDIENTE</Text>
                <Input
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
                    />
                </View>
                <View style={styles.ingredients}>
                    {ingredients.map((item, index) => (
                        <View style={styles.ingredient} >
                            <Text style={{ color: THEME.COLORS.CAPTION_500, fontSize: 32, width: '80%' }} key={index}>° {item}</Text>
                            <Button
                                size={50}
                                icon={<TrashSimple color={THEME.COLORS.CAPTION_500} size={32} />}
                                onPress={() => {
                                    const newIngredients = [...ingredients];
                                    newIngredients.splice(index, 1);
                                    setIngredients(newIngredients);
                                }}
                            />
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        </Background>
    )
}
