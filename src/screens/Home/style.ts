import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
    },
    logo: {
        marginBottom: 28
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 24,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    },
    ingredients: {
        gap: 24,
        width: '80%'
    },
    ingredient: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 32,
        color: THEME.COLORS.CAPTION_500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});