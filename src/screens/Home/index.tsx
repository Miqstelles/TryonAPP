import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation()

    return (
        <Background>
            <SafeAreaView></SafeAreaView>
        </Background>
    )
}