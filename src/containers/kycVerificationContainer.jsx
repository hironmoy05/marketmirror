import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Keyboard, Pressable, SafeAreaView} from 'react-native';
import {Login} from '../components';
import { HeaderBarContainer } from './headerBarContainer';
import { useNavigation } from '@react-navigation/native';
import Document from '../assets/document.svg';
import DropDown from '../assets/dropdown.svg';
import Number from '../assets/number.svg';
import Camera1 from '../assets/camera1.svg';
import { Styles } from '../styles';

export function KycVerificationContainer() {
    const navigation = useNavigation();
    const [newPasswordInputColor, setNewPasswordInputColor] = useState(false);
    const [newSecureText, setNewSecureText] = useState(true);
    const [newPassword, setNewPassword] = useState('');

    const kycMargin = {
        marginTop: 20
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <ScrollView>
                <HeaderBarContainer buyContainer={Styles.flatHeader} navigation={navigation} headerTitle={'KYC Verification'} kycVerification={'kycVerification'} />
                
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>KYC Verification</Text>
                        <Text style={styles.subTitle}>Submit your KYC Document for verify your details</Text>
                    </View>

                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Document style={{top: -5}} />
                            <Text style={{marginLeft: 20, fontFamily: 'Open Sans Medium', color: '#212121'}}>Select Document Type</Text>
                        </View>
                        <DropDown />
                    </View>
                    <Login.FormBox kycMargin= {kycMargin}>
                        <Login.Label>Document ID</Login.Label>
                            <Login.IconBox kycDoc='kycDoc'>
                                <Number style={{top: -5}} />
                            </Login.IconBox>
                            <Login.PasswordTextInput
                                passwordInputColor={newPasswordInputColor}
                                placeholderTextColor='#C9C9C9'
                                placeholder= "Number"
                                keyboardType='default'
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={true}
                                secureTextEntry={newSecureText}
                                returnKeyType='next'
                                value={newPassword}
                                name='password'
                                onChangeText={pass => setNewPassword(pass)}
                            />
                    </Login.FormBox>

                    <Text style={{fontFamily:'Open Sans Bold', fontSize: 17, color: '#212121', marginTop: 30}}>Take a selfie with your ID Card</Text>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '25%', paddingBottom: '25%', backgroundColor: '#E7EFFD', marginTop: '3%', border: '#D2D2D266'}}>
                        <Camera1 />
                    </View>

                    <Pressable style={{backgroundColor: '#013567', marginBottom: '10%', marginTop: '10%', borderRadius: 5, marginLeft: 15, marginRight: 15}}><Text style={{padding: '5%', textAlign: 'center', fontFamily: 'Open Sans Medium', color: '#fff', fontSize: 18}}>Submit for Verification</Text></Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '4%',
        paddingLeft: '4%',
        paddingRight: '4%' 
    },
    title: {
        fontFamily: 'Open Sans Bold',
        color: '#212121',
        fontSize: 28
    },
    subTitle: {
        fontFamily: 'Open Sans Medium',
        color: '#707070'
    },
})
