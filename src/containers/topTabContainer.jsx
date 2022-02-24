import React from 'react';
import { BuyContainer } from './buyContainer';
import { SellContainer } from './sellContainer';
import { TransferContainer } from './transferContainer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabContainer = () => {

    return (
        <View style={styles.historyContainer}>
            <Tab.Navigator>
                <Tab.Screen name="Buy" component={BuyContainer} />
                <Tab.Screen name="Sell" component={SellContainer} />
                <Tab.Screen name="Transfer" component={TransferContainer} />
            </Tab.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#013567',
    },

    historyContainer: {
        flex: 1,
    }
})