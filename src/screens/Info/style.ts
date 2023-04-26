import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
    howToUse: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    infos: {
        gap: 50
    },
    info: {
        fontSize: 24,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        width: 306,
    },
    title: {
        fontSize: 32,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    }
});