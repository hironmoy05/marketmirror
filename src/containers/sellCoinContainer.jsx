import React from 'react';
import { Pressable, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card, ListItems } from '../components';
import BitCoin from '../assets/bitcoin_big.svg';
import { HeaderBarContainer } from './headerBarContainer';
import { CoinInputContainer } from './coinInputContainer';
import Fees from '../assets/fees.svg';
import { deviceHeight } from '../responsive';
import { Styles } from '../styles';

export function SellCoinContainer({ navigation }) {

    console.log(deviceHeight)
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
        left: `${-8}%`,
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <View style={styles.coinContainer}>
                <HeaderBarContainer headerTitle={'Sell Coin'} buyContainer={Styles.flatHeader} />
                
                {/* Card */}
                <Card balCard={balCard}>
                    <Card.Container balCardContainer={balCardContainer}>
                        <ListItems.ItemWrapper>
                            <BitCoin />
                            <ListItems.LeftWrapper wrapperPosition={wrapperPosition}>
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
                    <CoinInputContainer sellCoin='sellCoin' />

                    <View style={styles.paymentGateway}>
                        <View style={styles.bankBox}>
                            <Fees />
                            <Pressable onPress={() => console.log('pressed')}><Text style={{fontFamily: 'Open Sans Bold', fontSize:17}}>Fees : $10</Text></Pressable>
                        </View>
                    </View>


                    <View style={styles.btnBox}>
                        <Pressable onPress={() => console.log('Sell Button pressed')} style={styles.btn}><Text style={styles.btnText}>Sell</Text></Pressable>
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
    },
    bankBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    btnBox: {
        width: '100%',
        textAlign: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: Math.floor(`${deviceHeight / 2.9}`),
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