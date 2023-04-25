import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: THEME.COLORS.BACKGROUND_100,
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: 16,
        textAlign: 'center',
    },
});