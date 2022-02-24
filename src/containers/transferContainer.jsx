import React from 'react';
import { Transfer } from '../components';
import Ethereum from '../assets/ethereum.svg';
import BitCoin from '../assets/bitcoin.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import Dash from '../assets/dash.svg';
import EthereumClassic from '../assets/ethereum_classic.svg';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { screenSizeOne } from '../responsive';

export const TransferContainer = () => {
    const DATA = [
        {coin: <BitCoin />, id: '0', title: 'BitCoin', subTitle: 'BTC', price: '64,240.05', percentage: '2.84', position: 'OUT'},
        {coin: <Ethereum />, id: '1', title: 'Ethereum', subTitle: 'ETC', price: '11,240.05', percentage: '1.24', position: 'IN'},
        {coin: <LiteCoin />, id: '2', title: 'LiteCoin', subTitle: 'LTC', price: '23,240.05', percentage: '0.84', position: 'OUT'},
        {coin: <Ripple />, id: '3', title: 'Ripple', subTitle: 'XRC', price: '4,240.05', percentage: '1.14', position: 'IN'},
        {coin: <Dash />, id: '4', title: 'Dash', subTitle: 'DSC', price: '4,240.05', percentage: '1.14', position: 'OUT'},
        {coin: <EthereumClassic />, id: '5', title: 'Ethereum Classic', subTitle: 'ECC', price: '4,240.05', percentage: '1.14', position: 'OUT'},
    ]
    
    return (
        <Transfer screenSizeOne={screenSizeOne()}>
            <Transfer.HistoryTitle>Transfer History</Transfer.HistoryTitle>
            <Transfer.Container>
                <FlatList 
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <Transfer.Frame key={item.id}>
                            <Transfer.HistoryCoinDate>20/10/21 7:40 PM</Transfer.HistoryCoinDate>
                            <Transfer.HistoryBox>
                                <Transfer.HistoryRightWrapper>
                                    {item.coin}
                                    <Transfer.HistoryRightWrapperInner>
                                        <Transfer.HistoryCoinTitle><Text style={{color: '#212121', fontFamily: 'Open Sans Bold'}}>{item.title} {item.subTitle}</Text></Transfer.HistoryCoinTitle>
                                        <Transfer.HistoryCoinFigure>$3,942.71 X 1</Transfer.HistoryCoinFigure>
                                    </Transfer.HistoryRightWrapperInner>
                                </Transfer.HistoryRightWrapper>
                                <Transfer.HistoryLeftWrapper>
                                    <Transfer.HistoryCoinPricePosition>{item.position}</Transfer.HistoryCoinPricePosition>
                                    <Transfer.HistoryCoinPrice position={item.position}>$3,942.71</Transfer.HistoryCoinPrice>
                                </Transfer.HistoryLeftWrapper>
                            </Transfer.HistoryBox>
                        <View style={styles.divider} />
                        </Transfer.Frame>
                    )}
                />
            </Transfer.Container>  
        </Transfer>
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