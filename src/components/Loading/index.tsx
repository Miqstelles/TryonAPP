import logoImg from '../../assets/logo.png'
import { styles } from './style';
import { Background } from '../Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from '../Heading';
import { ActivityIndicator, Image, View } from "react-native";
import { THEME } from '../../theme';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={THEME.COLORS.PRIMARY} />
            <Image
                style={styles.logo}
                source={logoImg}
            />
            <Heading />
        </View>
    );
}