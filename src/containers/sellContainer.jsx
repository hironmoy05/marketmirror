import React from 'react';
import { Sell } from '../components';
import Ethereum from '../assets/ethereum.svg';
import BitCoin from '../assets/bitcoin.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import Dash from '../assets/dash.svg';
import EthereumClassic from '../assets/ethereum_classic.svg';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { screenSizeOne } from '../responsive';

export const SellContainer = () => {
    const DATA = [
        {coin: <BitCoin />, id: '0', title: 'BitCoin', subTitle: 'BTC', price: '64,240.05', percentage: '2.84'},
        {coin: <Ethereum />, id: '1', title: 'Ethereum', subTitle: 'ETH', price: '11,240.05', percentage: '1.24'},
        {coin: <LiteCoin />, id: '2', title: 'LiteCoin', subTitle: 'LTC', price: '23,240.05', percentage: '0.84'},
        {coin: <Ripple />, id: '3', title: 'Ripple', subTitle: 'XRC', price: '4,240.05', percentage: '1.14'},
        {coin: <Dash />, id: '4', title: 'Dash', price: '4,240.05', percentage: '1.14'},
        {coin: <EthereumClassic />, id: '5', title: 'Ethereum Classic', subTitle: 'BCC', price: '4,240.05', percentage: '1.14'},
    ]
    
    return (
        <Sell screenSizeOne={screenSizeOne()}>
            <Sell.HistoryTitle>Sell History</Sell.HistoryTitle>
            <Sell.Container>
                <FlatList 
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <Sell.Frame key={item.id}>
                            <Sell.HistoryCoinDate>20/10/21 7:40 PM</Sell.HistoryCoinDate>
                            <Sell.HistoryBox>
                                <Sell.HistoryRightWrapper>
                                    {item.coin}
                                    <Sell.HistoryRightWrapperInner>
                                        <Sell.HistoryCoinTitle><Text style={{fontFamily: 'Open Sans Bold', color: '#212121'}}>{item.title} {item.subTitle}</Text></Sell.HistoryCoinTitle>
                                        <Sell.HistoryCoinFigure>$3,942.71 X 1</Sell.HistoryCoinFigure>
                                    </Sell.HistoryRightWrapperInner>
                                </Sell.HistoryRightWrapper>
                                <Sell.HistoryLeftWrapper>
                                    <Sell.HistoryCoinPrice>$3,942.71</Sell.HistoryCoinPrice>
                                </Sell.HistoryLeftWrapper>
                            </Sell.HistoryBox>
                        <View style={styles.divider} />
                        </Sell.Frame>
                    )}
                />
            </Sell.Container>  
        </Sell>
    )
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#D2D2D2',
        height: 2,
        width: '90%',
        alignSelf: 'center'
    }
})