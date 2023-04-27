import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 24,
        marginTop: 40,
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