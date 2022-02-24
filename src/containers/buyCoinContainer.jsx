import React from 'react';
import { Pressable, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card, ListItems } from '../components';
import BitCoin from '../assets/bitcoin_big.svg';
import { HeaderBarContainer } from './headerBarContainer';
import { CoinInputContainer } from './coinInputContainer';
import Bank from '../assets/bank.svg';
import BankCard from '../assets/card.svg';
import { deviceHeight } from '../responsive';
import {Styles} from '../styles';

export function BuyCoinContainer({ navigation }) {

    const balCard = {
        width: '100%',
        position: 'relative',
        top: '3%',
    }
    
    const balCardContainer = {
        width: '93%',
        background: '#fff',
        borderRadius: '10px',
        borderWidth: '2px',
        borderColor: '#0135671A',
    }

    const font = {
        'font-size': '20px',
        color: '#013567',
        'padding-top': '10px',
        'padding-bottom': '10px' 
    }

    const wrapperPosition = {
        position: 'relative',
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <View style={styles.coinContainer}>
                <HeaderBarContainer headerTitle={'Buy Coin'} buyContainer={Styles.flatHeader} />
                
                {/* Card */}
                <Card balCard={balCard}>
                    <Card.Container balCardContainer={balCardContainer}>
                        <ListItems.ItemWrapper>
                            <ListItems.LeftWrapper wrapperPosition={wrapperPosition}>
                            <BitCoin />
                                <ListItems.TitleWrapper>
                                    <ListItems.ListSubTitle>Bitcoin</ListItems.ListSubTitle>
                                    <ListItems.ListTitle font={font}>2.62565<Text style={{color: '#A8A8A8', fontFamily:'Open Sans Regular', fontSize: 14}}>BTC</Text></ListItems.ListTitle>
                                </ListItems.TitleWrapper>
                            </ListItems.LeftWrapper>
                            <ListItems.RightWrapper>
                                <ListItems.ListPrice>165218.45<Text style={{fontFamily: 'Open Sans Regular', color: '#212121'}}>USD</Text></ListItems.ListPrice>
                            </ListItems.RightWrapper>
                        </ListItems.ItemWrapper>

                    </Card.Container>
                    <CoinInputContainer />

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
                        <Pressable style={styles.btn}><Text style={styles.btnText}>Buy</Text></Pressable>
                    </View>
                </Card>
            </View>
        </SafeAreaView>
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
        marginTop: Math.floor(`${deviceHeight / 5.3}`),
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