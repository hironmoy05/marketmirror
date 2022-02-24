import { StyleSheet } from 'react-native';
import {deviceHeight} from '../responsive';

const Styles = StyleSheet.create({

    // Drawer HeaderBar
    flatHeader: {
        'padding-bottom': 5,
        'border-bottom-left-radius': 0,
        'border-bottom-right-radius': 0,
    },

    // GiftCardContainer
    cardCircleBox: {
        position: 'absolute', 
        top: `${-50}%`, 
        right: `${-22}%`,
        width: '50%', 
        height: '100%'
    },
    cardCircle: {
        width: 180,
        height: 180,
        right: `${-5}%`,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        opacity: .1,
        position: 'absolute',
    },
    cardCircle2: {
        width: 220,
        height: 220,
        right: `${-18}%`,
        top: -40,
        opacity: .2
    },
    cardCircleBox2: {
        top: 'auto',
        right: 'auto',
        bottom: -30,
        left: -20
    },
    cardCircle3: {
        left: -55,
        top: 10
    },
    cardCircle4: {
        width: 220,
        height: 220,
        left: -83,
        top: 10
    },
    dollar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    btnLogo: {
        left: -10
    },
    btnText: {
        fontFamily: 'Open Sans Bold',
        fontSize: 18,
        color: '#013567',
    },

    // SettingsContainer
    settingTitle: {
        fontFamily: 'Open Sans Bold',
        color: '#013567', 
        fontSize: 30
    },
    settingSubTitle: {
        fontFamily: 'Open Sans Regular',
        color: '#707070',
        marginTop: 10
    },
    settingsContainer: {
        paddingTop: '4%',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '5%'
    },
    settingBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }, 
    settingBox2: {
        paddingTop: '5%'
    },
    passwordSettingLogo: {
        left: 3
    },
    securitySettingLogo: {
        left: 5
    },
    feesSettingLogo: {
        left: 10,
    },
    settingRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingText: {
        fontFamily: 'Open Sans Bold',
        color: '#013567',
        marginLeft: 15
    },
    passwordSettingText: {
        marginLeft: -3,
        marginTop: -15,
    },  
    securitySettingText: {
        marginLeft: 18
    },
    feesSettingText: {
        marginLeft: 4,
        marginTop: -15
    },
    settingDropIcon: {
        transform: [{rotate: '270deg'}]
    },
    feesSettingDropIcon: {
      top: -7  
    },
    settingDivider: {
        height: 2,
        backgroundColor: '#DCDCDC',
        opacity: .5,
        marginTop: '5%'
    },
    feesSettingDivider: {
        marginTop: '2%'
    },
    settingDividerHeight: {
        marginTop: 0
    },
    settingDropIconPos: {
        marginTop: -15
    },

    // SUPPORTS
    supportContainer: {
        paddingTop: '4%',
        paddingLeft: '5%',
        paddingRight: '5%',
        height: Math.round(`${deviceHeight}`) 
    },
    supportTitle: {
        fontFamily: 'Open Sans Bold',
        fontSize: 25,
        color: '#013567',
        marginBottom: 10
    },
    supportSubtitle: {
        fontSize: 16,
        color: '#707070',
    }, 
    reportBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '8%',
        marginBottom: '4%',
    },
    supportRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        alignItems: 'center'
    },
    supportText: {
        fontFamily: 'Open Sans Medium',
        fontSize: 17,
        color: '#212121',
        marginLeft: 8,
    },
    supportInputcontainer: {
        marginTop: '5%'
    },  
    supportBtn: {
        backgroundColor: '#013567',
        display: 'flex',
        alignItems: 'center',
        marginTop: '2%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderRadius: 8,
        marginTop: 'auto',
        marginBottom: '28%'
    }, 
    supportBtnText: {
        color: '#fff',
        fontFamily: 'Open Sans Bold',
        fontSize: 18
    }

}) ;

export default Styles;