import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {HeaderBarContainer} from './headerBarContainer';
import Copy from '../assets/copy.svg';
import Scan from '../assets/scan.svg';
import {Styles} from '../styles';

export function ReceiveCoinContainer() {

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
                    <View style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '8%'}}>
                        <Scan />
                    </View>
                </View>
                <View>
                    <Pressable><Text style={{fontFamily: 'Open Sans Bold', fontSize:22, textAlign: 'center', color: '#013567', marginTop: 10}}>Share</Text></Pressable>
                </View>
            </View>
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
    }
})