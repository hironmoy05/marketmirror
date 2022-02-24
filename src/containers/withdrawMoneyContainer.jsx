import React from 'react';
import { View, Text, StyleSheet, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import {CoinInputContainer} from './coinInputContainer';
import { deviceHeight } from '../responsive';
import Bank from '../assets/bank.svg';
import Add from '../assets/add.svg';
import Fees from '../assets/fees.svg';
import Dropdown from '../assets/dropdown.svg';
import { Styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export function WithdrawMoneyContainer() {
    const navigation = useNavigation();
    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                contentContainerStyle='position'
                keyboardVerticalOffset='0'
            >
                <ScrollView>
                    <View style={{height: Math.round(deviceHeight*.8), backgroundColor: '#fff'}}>
                        <CoinInputContainer title='Withdraw Amount' />

                        <View style={{paddingLeft: '5%', display: 'flex', flexDirection: 'row'}}>
                            <Fees style={{top: -3}} /> 
                            <Text style={{left: -4, color: '#212121', fontFamily: 'Open Sans Regular'}}>Fee: $10</Text>
                        </View>


                        <View style={styles.paymentGateway}>
                        <View style={[Styles.settingDivider, {opacity: .2, marginTop: -5}]}></View>
                            <View style={styles.bankBox}>
                                <Bank />
                                <Pressable onPress={() => console.log('pressed')}><Text style={{marginLeft: 17, fontFamily: 'Open Sans Bold', fontSize:17}}>Select Bank</Text></Pressable>
                                <Dropdown style={{marginLeft: 'auto'}} />
                            </View>
                            <View style={[Styles.settingDivider, {opacity: .2}]}></View>
                            <Pressable style={{marginTop: '6%', backgroundColor: '#013567', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 5, width: '66%'}} onPress={() => navigation.navigate('NewBankAccount')}>
                                <Add style={{top: 3}} />
                                <Text style={{color: '#fff', fontFamily: 'Open Sans Bold', fontSize: 16}}>Add New Account</Text>
                            </Pressable>
                        </View>


                        <View style={styles.btnBox}>
                            <Pressable style={styles.btn}><Text style={styles.btnText}>Submit for Withdrawal</Text></Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    paymentGateway: {
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%', 
        paddingTop: '5%'
    },
    bankBox: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '6%',
    },
    btnBox: {
        width: '100%',
        textAlign: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: 'auto',
        marginBottom: '8%'
    },
    btn: {
        backgroundColor: '#013567',
        paddingTop: '4%',
        paddingBottom: '4%',
        borderRadius: 8,
    },
    btnText: {
        color: '#fff', 
        textAlign: 'center',
        fontFamily: 'Open Sans Medium',
        fontSize: 18,
    },
})