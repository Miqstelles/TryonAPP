import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background } from "../../components/Background";

import { styles } from "./style";

export function Home() {
    const navigation = useNavigation()

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>DIGITE SEU INGREDIENTE</Text>
                <Input
                />
                <View style={styles.btn}>
                    <Button
                        title="ADICIONAR"
                        size={155}
                    />
                    <Button
                        title="0"
                        size={50}
                    />
                </View>
            </SafeAreaView>
        </Background>
    )
}