import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        marginTop: 20
    },
    logo: {
        marginBottom: 28
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 24,
        marginTop: 140,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    ingredients: {
        width: '80%',
        maxHeight: 300,
        borderWidth: 1,
        borderColor: THEME.COLORS.CAPTION_500
    },
    ingredient: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 32,
        color: THEME.COLORS.CAPTION_500,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
    },
    recipeList: {
        backgroundColor: THEME.COLORS.BACKGROUND_100,
        paddingHorizontal: 20,
        paddingTop: 20,
        gap: 20,
        minWidth: '100%', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    recipeItem: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    recipeText: {
        fontSize: 20,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        width: '80%'
    }
});