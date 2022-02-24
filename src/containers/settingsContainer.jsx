import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, Keyboard } from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import { Styles } from '../styles';
import Term from '../assets/term.svg';
import Fees from '../assets/fees.svg';
import Security from '../assets/security.svg';
import Dropdown from '../assets/dropdown.svg';
import { useNavigation } from '@react-navigation/native';
import { Login } from '../components';
import Modal from 'react-native-modal';
import Cross from '../assets/cross.svg';
import { calcWidth, deviceWidth, PixelDeviceHeight } from '../responsive';
import Password from '../assets/password.svg';
import Eye from '../assets/Eye.svg';
import EyeHide from '../assets/eye_hide.svg';

export function SettingsContainer () {
    const [modalVisible, setModalVisible] = useState(false);
    const [newPasswordInputColor, setNewPasswordInputColor] = useState(false);
    const [newSecureText, setNewSecureText] = useState(true);
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordTextColor, setNewPasswordTextColor] = useState(false);
    const [confirmNewPasswordInputColor, setConfirmNewPasswordInputColor] = useState(false);
    const [confirmNewSecureText, setConfirmNewSecureText] = useState(true)
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [confirmNewPasswordTextColor, setConfirmNewPasswordTextColor] = useState(false);
    const [resetPasswordInputColor, setResetPasswordInputColor] = useState(false);

    useEffect(() => {
        confirmNewPassword ? setConfirmNewPasswordInputColor(true) : setConfirmNewPasswordInputColor(false);
        confirmNewPassword ? setConfirmNewPasswordTextColor(true) : setConfirmNewPasswordTextColor(false);
        newPassword && confirmNewPassword ? setResetPasswordInputColor(true) : setResetPasswordInputColor(false);
        newPassword ? setNewPasswordTextColor(true) : setNewPasswordTextColor(false);
        confirmNewPassword ? setConfirmNewPasswordTextColor(true) : setConfirmNewPasswordTextColor(false);
    })

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <HeaderBarContainer headerTitle={'Settings'} buyContainer={Styles.flatHeader} />

            {/* Reset Password */}
            <Modal
                 isVisible={modalVisible}
                 onBackButtonPress={() => setModalVisible(false)}
                 onBackdropPress={() => setModalVisible(false)}
                 deviceHeight={PixelDeviceHeight}
                 deviceWidth={deviceWidth}
                 useNativeDriver={false}
                 style={{margin: 0}}
            >
            <View style={styles.popup}>
                <View style={styles.cross}>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Cross />
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.title}>Change Password</Text>
                    <Text style={styles.subTitle}>Change your old Password for Safety</Text>
                </View>    

                <Login.FormBox>
                        <Login.Label>Old Password</Login.Label>
                            <Login.IconBox>
                                <Password />
                            </Login.IconBox>
                            <Login.PasswordTextInput
                                passwordInputColor={confirmNewPasswordInputColor}
                                placeholderTextColor='#C9C9C9'
                                placeholder= "Please enter old password"
                                keyboardType='default'
                                // forwardRef={passwordRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={true}
                                secureTextEntry={confirmNewSecureText}
                                returnKeyType='next'
                                value={confirmNewPassword}
                                name='password'
                                onChangeText={pass => setConfirmNewPassword(pass)}
                            />
                            <Login.IconBox2>
                            <Pressable onPress={() => setConfirmNewSecureText(!confirmNewSecureText)}>{confirmNewSecureText ? <EyeHide /> : <Eye />}</Pressable>
                    </Login.IconBox2>
                    <View style={{display: 'flex', alignItems: 'flex-start', paddingLeft: 3, paddingTop: 3}}>
                    </View>
                </Login.FormBox>
    

                 <Login.FormBox>
                        <Login.Label>New Password</Login.Label>
                            <Login.IconBox>
                                <Password />
                            </Login.IconBox>
                            <Login.PasswordTextInput
                                passwordInputColor={newPasswordInputColor}
                                placeholderTextColor='#C9C9C9'
                                placeholder= "Please enter new password"
                                keyboardType='default'
                                // forwardRef={passwordRef}
                                blurOnSubmit={true}
                                secureTextEntry={newSecureText}
                                returnKeyType='next'
                                value={newPassword}
                                name='password'
                                onChangeText={pass => setNewPassword(pass)}
                            />
                            <Login.IconBox2>
                            <Pressable onPress={() => setNewSecureText(!newSecureText)}>{newSecureText ? <EyeHide /> : <Eye />}</Pressable>
                    </Login.IconBox2>
                    <View style={{display: 'flex', alignItems: 'flex-start', paddingLeft: 3, paddingTop: 3}}>
                        <Text style={[styles.resetTextStyle, {color: `${newPasswordTextColor ? '#1DDB5C' : '#FE1D1D'}`}]}>Must contain alphabet and numericals with more than 8 characters</Text>
                    </View>
                </Login.FormBox>
                 <Login.FormBox>
                        <Login.Label>Confirm New Password</Login.Label>
                            <Login.IconBox>
                                <Password />
                            </Login.IconBox>
                            <Login.PasswordTextInput
                                passwordInputColor={confirmNewPasswordInputColor}
                                placeholderTextColor='#C9C9C9'
                                placeholder= "Please enter new password"
                                keyboardType='default'
                                // forwardRef={passwordRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={true}
                                secureTextEntry={confirmNewSecureText}
                                returnKeyType='next'
                                value={confirmNewPassword}
                                name='password'
                                onChangeText={pass => setConfirmNewPassword(pass)}
                            />
                            <Login.IconBox2>
                            <Pressable onPress={() => setConfirmNewSecureText(!confirmNewSecureText)}>{confirmNewSecureText ? <EyeHide /> : <Eye />}</Pressable>
                    </Login.IconBox2>
                    <View style={{display: 'flex', alignItems: 'flex-start', paddingLeft: 3, paddingTop: 3}}>
                        <Text style={[styles.resetTextStyle, {color: `${confirmNewPasswordTextColor ? '#1DDB5C' : '#FE1D1D'}`}]}>Both password must match</Text>
                    </View>
                </Login.FormBox>
    
                <Pressable disabled={!resetPasswordInputColor} onPress={() => setModalVisible(false) } style={[styles.otpButton, {backgroundColor: `${resetPasswordInputColor ? '#013567' : '#A8A8A8'}`}]}><Text style={{color: '#fff', fontSize: 18, fontFamily: 'Open Sans Bold'}}>Change Password</Text></Pressable>
                </View>
            </Modal>

                <View style={Styles.settingsContainer}>
                    <Text style={Styles.settingTitle}>Settings</Text>
                    <Text style={Styles.settingSubTitle}>Manage app settings</Text>
                </View>

            <View style={Styles.settingsContainer}>
                <Pressable style={Styles.settingBox} onPress={() => navigation.navigate('Terms')}>
                        <View style={Styles.settingRight}>
                            <Term />
                            <Text style={Styles.settingText}>Terms & Condition</Text>
                        </View>
                        <Dropdown style={Styles.settingDropIcon} />
                </Pressable>

                <View style={Styles.settingDivider}></View>
               
                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => navigation.navigate('PrivacyPolicy')}>
                        <View style={Styles.settingRight}>
                            <Term />
                            <Text style={Styles.settingText}>Privacy Policy</Text>
                        </View>
                        <Dropdown style={Styles.settingDropIcon} />
                </Pressable>

                <View style={Styles.settingDivider}></View>
                
                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => setModalVisible(true)}>
                        <View style={Styles.settingRight}>
                            <Security style={Styles.passwordSettingLogo} />
                            <Text style={[Styles.settingText, Styles.passwordSettingText]}>Change Password</Text>
                        </View>
                        <Dropdown style={[Styles.settingDropIcon, Styles.settingDropIconPos]} />
                </Pressable>

                <View style={[Styles.settingDivider, Styles.settingDividerHeight]}></View>

                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Term style={Styles.securitySettingLogo} />
                            <Text style={[Styles.settingText, Styles.securitySettingText]}>Security</Text>
                        </View>
                        <Dropdown style={Styles.settingDropIcon} />
                </Pressable>

                <View style={Styles.settingDivider}></View>

               
                <Pressable style={[Styles.settingBox, Styles.settingBox2]} onPress={() => console.log('Pressed')}>
                        <View style={Styles.settingRight}>
                            <Fees style={Styles.feesSettingLogo} />
                            <Text style={[Styles.settingText, Styles.feesSettingText]}>Fees & Limits</Text>
                        </View>
                        <Dropdown style={[Styles.settingDropIcon, Styles.feesSettingDropIcon]} />
                </Pressable>

                <View style={[Styles.settingDivider, Styles.feesSettingDivider]}></View>

               
            </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    popup: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 'auto',
    },
    cross: {
        position: 'relative',
        marginLeft: 'auto',
    },
    title: {
        fontSize: Number(`${calcWidth(7)}`),
        fontFamily: 'Open Sans Bold',
        color: '#212121',
    },
    subTitle: {
        color: '#707070',
        marginTop: 3
    },
    resetTextStyle: {
        fontFamily: 'Open Sans Regular',
        fontSize: 8,
    },
    otp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    otpButton: {
        padding: '5%',
        borderRadius: 5,
        marginTop: "20%",
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
})