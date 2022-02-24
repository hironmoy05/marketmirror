import React from 'react';
import {PorfolioTab} from '../components';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ListItems} from '../components';
import BitCoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import LiteCoin from '../assets/litecoin.svg';
import Ripple from '../assets/ripple.svg';
import Dash from '../assets/dash.svg';
import EthereumClassic from '../assets/ethereum_classic.svg';
import {
  calcWidth,
  deviceWidth,
  deviceHeight,
  screenSizeThree,
} from '../responsive';
import {useNavigation} from '@react-navigation/native';

export const PortfolioTabContainer = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      coin: <BitCoin />,
      id: '0',
      coinValue: '2.62565',
      name: 'Bitcoin',
      color: '#F29423',
      subTitle: 'BTC',
      price: '32,389.30',
      percentage: '35',
    },
    {
      coin: <Ethereum />,
      id: '1',
      coinValue: '1.64345',
      name: 'Ethereum',
      color: '#393A3B',
      subTitle: 'ETH',
      price: '13,389.30',
      percentage: '15',
    },
    {
      coin: <LiteCoin />,
      id: '2',
      coinValue: '10.47665',
      name: 'LiteCoin',
      color: '#325A97',
      subTitle: 'LTC',
      price: '3,389.30',
      percentage: '15',
    },
    {
      coin: <Ripple />,
      id: '3',
      coinValue: '40.73795',
      name: 'Ripple',
      color: '#18C818',
      subTitle: 'RPL',
      price: '2,389.30',
      percentage: '15',
    },
    {
      coin: <Dash />,
      id: '4',
      coinValue: '15.45654',
      name: 'Dash',
      color: '#2856D0',
      subTitle: 'DSH',
      price: '52,389.30',
      percentage: '15',
    },
    {
      coin: <EthereumClassic />,
      id: '5',
      coinValue: '20.5486',
      name: 'Ethereum Classic',
      color: '#146714',
      subTitle: 'ETC',
      price: '52,389.30',
      percentage: '5',
    },
  ];

  const folioBorder = {
    border: '1px solid #A8A8A8',
    'border-radius': '5px',
    width: calcWidth(90),
    margin: '0 auto 8px',
  };

  const font = {
    'font-size': '20px',
    color: '#013567',
  };

  // console.log(Number(`${Math.floor(deviceHeight/27)}`))

  // const portfolioList = {
  //     'margin-top': Number(`${Math.floor(deviceHeight/28)}`)+'%',
  //      height: Number(`${Math.floor(deviceHeight/2.2)}`)+'px',
  // }

  let circleWidth;
  let marginTop;

  if (Math.round(deviceHeight) >= 680) {
    circleWidth = Number(`${Math.floor(deviceWidth / 1.64)}`);
    marginTop = Number(`${Math.floor(deviceHeight / 12.5)}`);
  }

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <PorfolioTab>
        <View
          style={{
            backgroundColor: '#fff',
            width: circleWidth,
            height: circleWidth,
            borderRadius: Number(`${Math.floor(deviceWidth / 2.73)}`),
            marginTop: marginTop,
            border: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            {/* <Pie
              radius={Number(`${Math.floor(deviceWidth/3.57)}`)}
              innerRadius={Number(`${Math.floor(deviceHeight/27)}`)}
              sections={[
                {
                    percentage: Number(`${DATA[5].percentage}`),
                    color: '#146714',
                },
                {
                    percentage: Number(`${DATA[4].percentage}`),
                    color: '#2856D0',
                },
                {
                    percentage: Number(`${DATA[3].percentage}`),
                    color: '#18C818',
                },
                {
                    percentage: Number(`${DATA[2].percentage}`),
                    color: '#325A97',
                },
                {
                    percentage: Number(`${DATA[1].percentage}`),
                    color: '#393A3B',
                },
                {
                  percentage: Number(`${DATA[0].percentage}`),
                  color: '#F29423',
                },
              ]}
              dividerSize={2}
              strokeCap={'butt'}
              /> */}
          </View>
        </View>
      </PorfolioTab>
      <PorfolioTab.Container screenSizeThree={screenSizeThree()}>
        <ListItems>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('CryptoBalance')}>
                  <ListItems.ItemWrapper
                    border={folioBorder}
                    onPress={() => <CryptoBalance />}>
                    <ListItems.LeftWrapper>
                      {item.coin}
                      <ListItems.TitleWrapper>
                        <ListItems.ListSubTitle>
                          {item.name}
                        </ListItems.ListSubTitle>
                        <ListItems.ListTitle font={font}>
                          {item.coinValue}
                          <Text
                            style={{
                              color: '#A8A8A8',
                              fontFamily: 'Open Sans Regular',
                              fontSize: 14,
                            }}>
                            {item.subTitle}
                          </Text>
                        </ListItems.ListTitle>
                      </ListItems.TitleWrapper>
                    </ListItems.LeftWrapper>
                    <ListItems.RightWrapper>
                      <ListItems.ListPercent>
                        <Text style={{fontSize: 30}}>. </Text>
                        <Text
                          style={{
                            color: `${item.color}`,
                            fontFamily: 'Open Sans Bold',
                            lineHeight: 20,
                          }}>
                          {item.percentage}%
                        </Text>
                      </ListItems.ListPercent>
                      <ListItems.ListPrice>
                        {item.price}
                        <Text
                          style={{
                            fontFamily: 'Open Sans Regular',
                            color: '#212121',
                          }}>
                          USD
                        </Text>
                      </ListItems.ListPrice>
                    </ListItems.RightWrapper>
                  </ListItems.ItemWrapper>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
        </ListItems>
      </PorfolioTab.Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#D2D2D2',
    height: 2,
    width: '90%',
    alignSelf: 'center',
  },
});
