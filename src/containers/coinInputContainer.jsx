import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import QrCode from '../assets/qr_code.svg';

export function CoinInputContainer(props) {
    const [cost, setCost] = useState();
    let Title = props.title

    return (
        <View style={styles.container}>
            <Text style={[styles.coinInputText, {marginTop: props.sendCoin ? `${-5}%` : '5%'}]}>{props.sendCoin ? null : props.walletAddress ? null : Title ? Title : 'Amount'}</Text>
            <View style={styles.inputBox}>
                <TextInput 
                    style={{flexBasis: '100%', height: '70%', borderBottomWidth: 2, borderBottomColor: '#D2D2D2', marginRight: 34, borderLeftColor: '#013567', fontFamily:'Open Sans Bold', paddingLeft: 15}} 
                    placeholder= {props.sendCoin ? 'Wallet Address' : props.sellCoin ? '1000' : '100'} 
                    placeholderTextColor={props.sendCoin ? '#D2D2D2' : '#013567'} 
                    keyboardType={'numeric'} 
                    value={cost}
                    autoFocus={true}
                    blurOnSubmit={false}
                    onChangeText={(num) => setCost(num)}
                />
                <View style={{backgroundColor: '#013567', height: 20, width: 3, position: 'absolute', bottom: 25}}></View>
                <Text style={{marginLeft: 'auto', color: '#212121'}}>{props.sendCoin ? <QrCode /> : props.walletAddress ? 'BTC' : 'USD'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        paddingLeft: '5%', 
        paddingRight: '5%',
    },
    coinInputText: {
        fontFamily: 'Open Sans Bold', 
        fontSize: 25, 
        color: '#013567', 
        textAlign: 'left',
    },
    inputBox: {
        display: 'flex', 
        flexDirection:'row', 
        paddingTop: '4%', 
        position: 'relative'
    }
})