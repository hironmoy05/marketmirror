import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    swiperContainer: {
        height: '30%',
        alignItems: 'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    bottomViewBox: {
        width: '100%',
        // backgroundColor: colors.white,
        display: 'flex',
        alignItems: 'center',
        padding: 20,
    },
    imageBox: {
        width: '90%',
        height: '100%',
        borderWidth: 2,
        borderColor: colors.black3,
        borderRadius: 10,
    },
    title: {
        fontFamily: 'Roboto Bold',
        fontSize: 25,
        color: colors.primaryDark,
    },
    subTitle: {
        fontFamily: 'Roboto',
        color: colors.black3,
        textAlign: 'center',
        width: 300,
        marginTop: '4%',
    },
    button: {
        borderColor: colors.primaryDark,
        borderWidth: 1,
        marginTop: 'auto',
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Open Sans Bold',
        color: colors.primaryDark,
        paddingLeft: '40%',
        paddingRight: '40%',
        paddingTop: '3.5%',
        paddingBottom: '3.5%',
    },
    buttonLast: {
        backgroundColor: colors.primaryDark,
        marginTop: 'auto',
        borderRadius: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    buttonTextLast: {
        fontFamily: 'Open Sans Bold',
        color: '#fff',
        paddingTop: '3.5%',
        paddingBottom: '3.5%',
    },
})

export default styles;