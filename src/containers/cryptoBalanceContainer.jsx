import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { Card } from '../components';
import { HeaderBarContainer } from './headerBarContainer';
import { BalanceCard } from './balanceCard';
import { BidAskContainer } from './bidAskContainer';
import { GraphContainer } from './graphContainer';
import Send from '../assets/send.svg';
import Receive from '../assets/receive.svg';


export function CryptoBalanceContainer({ navigation }) {
    const buttonPad = {
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-top': '10px',
        'margin-bottom': '40px'
    }

    const actionButtonBox = {
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'border-width': '2px',
        'border-color': '#D2D2D266',
        'border-radius': '15px',
        borderWidth: 2,
        borderColor: '#0135671A'
    }

    const actionButtonText = {
        color: '#fff',
        marginLeft: '-8px',
        fontSize: '17px',
        color: '#013567',
        'margin-left': '4px'
    }

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
            <ScrollView>
                <HeaderBarContainer />
                <BalanceCard navigation={navigation} />
                <BidAskContainer />
                <GraphContainer />

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Send and Receive</Text>
                    </View>
                    <Card.ButtonBox buttonPad={buttonPad}>
                        <Card.ActionButtonBox actionButtonBox={actionButtonBox}>
                            <Send style={{marginTop: 6}} />
                            <Card.ActionButton onPress={() => navigation.navigate('SendCoin')}>
                                <Card.ActionButtonText actionButtonText={actionButtonText}>Send</Card.ActionButtonText>
                            </Card.ActionButton>
                        </Card.ActionButtonBox>
                        <Card.ActionButtonBox actionButtonBox={actionButtonBox}>
                            <Receive style={{marginTop: 6}} />
                            <Card.ActionButton onPress={() => navigation.navigate('ReceiveCoin')}>
                                <Card.ActionButtonText actionButtonText={actionButtonText}>Receive</Card.ActionButtonText>
                            </Card.ActionButton>
                        </Card.ActionButtonBox>
                    </Card.ButtonBox>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: '4%',
        paddingRight: '4%',

    },
    header: {
        
    },
    headerText: {
        fontFamily: 'Open Sans Medium',
        color: '#212121',
        fontSize: 20
    }
})