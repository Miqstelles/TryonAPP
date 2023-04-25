import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Background } from "../../components/Background";
import { useNavigation } from '@react-navigation/native';
import { Heading } from "../../components/Heading";

import { styles } from "./style";

import logoImg from '../../assets/logo.png'

export function Home() {
    const navigation = useNavigation()

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />
                <Heading />
            </SafeAreaView>
        </Background>
    )
}