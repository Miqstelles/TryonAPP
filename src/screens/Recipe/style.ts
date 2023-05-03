import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        width: '80%',
        textAlign: 'center',
        paddingBottom: 50,
    },
    options: {
        backgroundColor: THEME.COLORS.BACKGROUND_200,
        width: '100%',
        height: 81,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    optionsText: {
        fontSize: 24,
        fontFamily: THEME.FONT_FAMILY.BOLD
    },
    optionsTextSelected: {
        fontSize: 24,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: '#fff',
    },
    underline: {
        width: 146,
        height: 4,
        color: '#fff',
    },
    ingrediente: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        width: 257,
        paddingTop: 50,
        lineHeight: 30
    }
});