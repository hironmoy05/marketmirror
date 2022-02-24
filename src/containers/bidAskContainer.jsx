import React from 'react';
import { BidAsk } from '../components';
import { View } from 'react-native';

export function BidAskContainer () {
    const statusColor = {
        color: '#1DDB5C',
        'text-align': 'right',
    }

    const bidState = {
        'flex-direction': 'column',
        'align-items': 'center',
        'margin-bottom': '-4%',
    }

    const addBorder = {
        'padding-bottom': '3%',
    }

    const fontsSize = {
        'font-family': 'Open Sans Bold',
        'font-size': '20px'
    }

    const pad = {
        paddingTop: '2%'
    }

    const alignText = {
        'text-align': 'right',
    }

    return (
        <BidAsk bidState={bidState}>
            <BidAsk.Container addBorder={addBorder}>
                <BidAsk.Frame>
                    <BidAsk.BidTitle>$65,320.56</BidAsk.BidTitle>
                    <BidAsk.BidSubTitle>Bid</BidAsk.BidSubTitle>
                </BidAsk.Frame>
                <BidAsk.Frame>
                    <BidAsk.BidTitle>$65,320.56</BidAsk.BidTitle>
                    <BidAsk.BidSubTitle>Ask</BidAsk.BidSubTitle>
                </BidAsk.Frame>
                <BidAsk.Frame>
                    <BidAsk.BidStatus statusColor={statusColor}>+ 52,826.07</BidAsk.BidStatus>
                </BidAsk.Frame>
                <BidAsk.Frame>
                    <BidAsk.BidStatus statusColor={statusColor}>4.50%</BidAsk.BidStatus> 
                    <BidAsk.BidSubTitle>CHANGES</BidAsk.BidSubTitle>
                </BidAsk.Frame>
            </BidAsk.Container>
            <View style={{width: '95%', height: 2, backgroundColor: '#D2D2D2'}}></View>
            <BidAsk.Container addBorder={{paddingTop: '3%'}}>
                <BidAsk.Frame>
                    <BidAsk.BidSubTitle>Bitcoin</BidAsk.BidSubTitle>
                    <BidAsk.BidTitle fontsSize={[fontsSize, {paddingTop: '2%'}]}>$64,418.28</BidAsk.BidTitle>
                </BidAsk.Frame>
                <BidAsk.Frame>
                    <BidAsk.BidSubTitle alignText={alignText}>Low</BidAsk.BidSubTitle>
                    <BidAsk.BidTitle pad={pad}>$61,622.56</BidAsk.BidTitle>
                </BidAsk.Frame>
                <BidAsk.Frame>
                    <BidAsk.BidSubTitle alignText={alignText}>High</BidAsk.BidSubTitle>
                    <BidAsk.BidTitle pad={pad}>$61,622.56</BidAsk.BidTitle>
                </BidAsk.Frame>
            </BidAsk.Container>
        </BidAsk>
    )
}