import React, {useState} from 'react';
import { NotificationTab } from '../components';
import Ethereum from '../assets/ethereum.svg';
import BitCoin from '../assets/bitcoin.svg';
import Dash from '../assets/dash.svg';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { deviceWidth, screenSizeFour } from '../responsive';

export const NotificationTabContainer = () => {
    const DATA = [
        {coin: <BitCoin />, id: '0', title: 'Bitcoin cryptocurrency price alerts', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
        {coin: <Ethereum />, id: '1', title: 'Coinwink - Bitcoin BTC Price Alert,', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
        {coin: <BitCoin />, id: '2', title: 'RBI circular', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
        {coin: <BitCoin />, id: '3', title: 'What Is Cryptocurrency in Simple Words?', subTitle: 'Cryptocurrencies are systems that allow for secure payments online which are denominated in terms of virtual "tokens."'},
        {coin: <Dash />, id: '4', title: 'Bitcoin cryptocurrency price alerts?', subTitle: 'Set price alerts for all crypto-currencies listed on bitcoin with alert sound and browser...'},
    ]

    const [addRemoveBtn, setAddRemoveBtn] = useState(false);
    
    return (
        <>
        <NotificationTab>
            <View style={styles.clearBox}>
                <NotificationTab.NotificationTitle>Notification</NotificationTab.NotificationTitle>
                <Pressable onPress={() => console.log('Clear all pressed')}><Text style={styles.clear}>Clear All</Text></Pressable>
            </View>
            <NotificationTab.Container screenSizeFour={screenSizeFour()}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <Pressable onPress={(e) => {
                            console.log('notification', index, item.id)
                            if (index === item.id) {
                                return setAddRemoveBtn(!addRemoveBtn);
                            }
                        }}>
                            {
                                addRemoveBtn ? (
                                    <>                    
                                        <View key={item.id} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: deviceWidth, borderTopColor: '#D2D2D2', borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: '#D2D2D2'}}>
                                            <View style={{width: '80%', marginLeft: -10+'%', backgroundColor: 'rgba(210, 210, 210, .2)'}}>
                                                <NotificationTab.NotificationBox>
                                                {item.coin}
                                                <NotificationTab.NotificationTextBox>
                                                    <NotificationTab.NotificationTitle>{item.title}</NotificationTab.NotificationTitle>
                                                    <NotificationTab.NotificationSubTitle>{item.subTitle}</NotificationTab.NotificationSubTitle>
                                                </NotificationTab.NotificationTextBox>
                                                </NotificationTab.NotificationBox>
                                                <NotificationTab.NotificationDate>20/10/21 7:40 PM</NotificationTab.NotificationDate>
                                            </View>
                                            <View style={{width: '35%', backgroundColor: '#CCD6E0', justifyContent: 'center', alignItems: 'center'}}>
                                                <Pressable><Text style={{color: '#FE1D1D'}}>Remove</Text></Pressable>
                                            </View>
                                        </View>
                                        <View style={styles.divider, styles.divider2} />
                                    </>
                                )
                                :
                                (
                                    <NotificationTab.Frame key={item.id}>
                                        <NotificationTab.NotificationBox>
                                        {item.coin}
                                        <NotificationTab.NotificationTextBox>
                                            <NotificationTab.NotificationTitle>{item.title}</NotificationTab.NotificationTitle>
                                            <NotificationTab.NotificationSubTitle>{item.subTitle}</NotificationTab.NotificationSubTitle>
                                        </NotificationTab.NotificationTextBox>
                                        </NotificationTab.NotificationBox>
                                        <NotificationTab.NotificationDate>20/10/21 7:40 PM</NotificationTab.NotificationDate>
                                        <View style={styles.divider} />
                                    </NotificationTab.Frame>
                                )
                            }
                            
                                   
                        </Pressable>
                    )}
                />
            </NotificationTab.Container>  
        </NotificationTab>
        </>
    )
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#D2D2D2',
        height: 2,
        width: '90%',
        alignSelf: 'center'
    },
    divider2: {
        width: '100%',
        height: 4,
        marginTop: 5
    },
    clearBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '5%',
    },
    clear: {
        fontFamily: 'Open Sans Bold',
        fontSize: 15,
        backgroundColor: '#013567',
        paddingTop: '2%',
        paddingBottom: '2%', 
        paddingLeft: '5%',
        paddingRight: '5%',
        color: '#fff'
    }
})