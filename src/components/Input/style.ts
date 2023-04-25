import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 293,
        margin: 12,
        padding: 10,
        borderRadius: 5,
        backgroundColor: THEME.COLORS.BACKGROUND_300,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 20
    },
});
