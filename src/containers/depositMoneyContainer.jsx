import React from 'react';
import { View, Text, StyleSheet, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import {CoinInputContainer} from './coinInputContainer';
import { deviceHeight } from '../responsive';
import Bank from '../assets/bank.svg';
import BankCard from '../assets/card.svg';

export function DepositMoneyContainer() {
    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                contentContainerStyle='position'
                keyboardVerticalOffset='0'
            >
                <ScrollView>
                    <View style={{height: Math.round(deviceHeight*.8), backgroundColor: '#fff'}}>
                        <CoinInputContainer title='Deposit Amount' />
                        <View style={styles.paymentGateway}>
                            <Text style={styles.gatewayText}>Select Payment gateway</Text>
                            <View style={styles.bankBox}>
                                <Bank />
                                <Pressable onPress={() => console.log('pressed')}><Text style={{marginLeft: 17, fontFamily: 'Open Sans Bold', fontSize:17}}>Net Banking</Text></Pressable>
                            </View>
                            <View style={styles.bankBox}>
                                <BankCard />
                                <Pressable onPress={() => console.log('pressed')}><Text style={{fontFamily: 'Open Sans Bold', fontSize:17}}>Debit/Credit Card</Text></Pressable>
                            </View>
                        </View>


                        <View style={styles.btnBox}>
                            <Pressable style={styles.btn}><Text style={styles.btnText}>Deposit</Text></Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    coinContainer: {
        display: 'flex',
    },
    paymentGateway: {
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%', 
        paddingTop: '5%'
    },
    gatewayText: {
        fontFamily:'Open Sans Medium', 
        color: '#013567', 
        fontSize:18
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
    }
})