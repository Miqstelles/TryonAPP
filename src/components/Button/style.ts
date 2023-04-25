import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: THEME.COLORS.BACKGROUND_100,
        padding: 10,
        borderRadius: 5,
        width: 155,
        height: 45,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonText: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: 20,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        textAlign: 'center',
    },
});