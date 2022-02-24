import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HeaderBarContainer } from './headerBarContainer';
import { DepositMoneyContainer } from './depositMoneyContainer';
import { WithdrawMoneyContainer } from './withdrawMoneyContainer';
import { Styles } from '../styles';

const TopTab = createMaterialTopTabNavigator();

export function BankAccountContainer() {
    return (
        <>
            <HeaderBarContainer headerTitle='Bank Accounts' buyContainer={Styles.flatHeader} />

            <TopTab.Navigator>
                <TopTab.Screen 
                    name='Deposit Money'
                    component={DepositMoneyContainer}
                />
                <TopTab.Screen 
                    name='WithDraw Money'
                    component={WithdrawMoneyContainer}
                />
            </TopTab.Navigator>
        </>
    )
}