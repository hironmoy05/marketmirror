import React from 'react';
import {Text, View} from 'react-native';
import {Card, ListItems} from '../components';
import BitCoin from '../assets/bitcoin_big.svg';
import Buy from '../assets/buy.svg';
import Sell from '../assets/sell.svg';

export const BalanceCard = ({navigation}) => {
  const balCard = {
    width: '100%',
    position: 'relative',
    top: '-6%',
  };

  const balCardContainer = {
    width: '93%',
    background: '#fff',
    borderRadius: '5px',
    borderWidth: 2,
    borderColor: '#0135671A',
  };

  const font = {
    'font-size': '20px',
    color: '#013567',
  };

  const wrapperPosition = {
    position: 'relative',
    left: -45,
  };

  const buttonPad = {
    paddingBottom: '20px',
    paddingLeft: '20px',
    marginTop: '8px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };

  const actionButtonBox = {
    width: '30%',
    marginRight: '5px',
    marginLeft: '5px',
    backgroundColor: '#013567',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10px',
  };

  const actionButtonText = {
    color: '#fff',
    marginLeft: '-8px',
    fontSize: '17px',
  };

  const balanceCardWrapper = {
    position: 'relative',
    left: `${-20}%`,
  };

  return (
    <Card balCard={balCard}>
      <Card.Container balCardContainer={balCardContainer}>
        <ListItems.ItemWrapper>
          <View style={{marginRight: '12%'}}>
            <BitCoin />
          </View>
          <ListItems.LeftWrapper wrapperPosition={wrapperPosition}>
            <ListItems.TitleWrapper>
              <ListItems.ListSubTitle>Coin Balance</ListItems.ListSubTitle>
              <ListItems.ListTitle font={font}>
                2.62565
                <Text
                  style={{
                    color: '#A8A8A8',
                    fontFamily: 'Open Sans Regular',
                    fontSize: 14,
                  }}>
                  BTC
                </Text>
              </ListItems.ListTitle>
            </ListItems.TitleWrapper>
          </ListItems.LeftWrapper>
          <ListItems.RightWrapper balanceCardWrapper={balanceCardWrapper}>
            <ListItems.ListPrice>
              165218.45
              <Text style={{fontFamily: 'Open Sans Regular', color: '#212121'}}>
                USD
              </Text>
            </ListItems.ListPrice>
          </ListItems.RightWrapper>
        </ListItems.ItemWrapper>

        <Card.ButtonBox buttonPad={buttonPad}>
          <Card.ActionButtonBox actionButtonBox={actionButtonBox}>
            <Buy />
            <Card.ActionButton onPress={() => navigation.navigate('BuyCoin')}>
              <Card.ActionButtonText actionButtonText={actionButtonText}>
                Buy
              </Card.ActionButtonText>
            </Card.ActionButton>
          </Card.ActionButtonBox>
          <Card.ActionButtonBox actionButtonBox={actionButtonBox}>
            <Sell />
            <Card.ActionButton onPress={() => navigation.navigate('SellCoin')}>
              <Card.ActionButtonText actionButtonText={actionButtonText}>
                Sell
              </Card.ActionButtonText>
            </Card.ActionButton>
          </Card.ActionButtonBox>
        </Card.ButtonBox>
      </Card.Container>
    </Card>
  );
};
