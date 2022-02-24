import React, { useState } from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {HeaderBarContainer} from './headerBarContainer';
import { CoinInputContainer } from './coinInputContainer';
import { Login } from '../components';
import Copy from '../assets/copy.svg';
import CheckBox from '@react-native-community/checkbox';
import {Styles} from '../styles';

export function SendCoinContainer2() {

    const sendButton = {
        width: '90%',
        'background-color': '#013567',
        marginLeft: '5%',
        marginBottom: '5%',
    }

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <HeaderBarContainer headerTitle={'Send Coin'} buyContainer={Styles.flatHeader} />
            <View style={styles.container}>
                <View style={{position: 'relative'}}>
                    <Text style={styles.title}>Wallet Address</Text>
                    <Text style={styles.subTitle}>23dmEa923940zLp2943ncxmJCB3940zLpX567</Text>
                    <View style={{width: '90%', marginLeft: 20, position: 'absolute', left: 300, top: 35}}>
                        <Copy />
                    </View>
                </View>
            </View>
                <CoinInputContainer walletAddress='walletAddress' />
                <Text style={{fontFamily: 'Open Sans Bold', color: '#013567', textAlign: 'right', paddingRight: '5%'}}>160212.65USD</Text>

            <View style={{paddingLeft: '3.5%', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '14%'}}>
                <CheckBox
                    onCheckColor='#fff'
                    onFillColor='yellow'
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text>I Confirm my payment with this wallet address</Text>
            </View>

                <Login.LoginFormButton sendButton={sendButton} onPress={() => console.log('Send coin')}><Text style={styles.btnText}>Send</Text></Login.LoginFormButton>
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
    btnText: {
        fontFamily: 'Open Sans Medium',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    }
})