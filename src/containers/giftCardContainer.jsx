import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import {useNavigation} from '@react-navigation/native';
import { GiftCard } from '../components';
import Buy from '../assets/buy.svg';
import Amazon from '../assets/amazon.svg';
import Icon from '../assets/Icon.svg';
import Airbnb from '../assets/airbnb.svg';
import { Styles } from '../styles';

export function GiftCardContainer() {
    const navigation = useNavigation();

    const opac = {
        fontSize: 10,
        opacity: .7,
        top: -7
    }

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <HeaderBarContainer navigation={navigation} headerTitle={'Gift Card'} />
            <GiftCard>
                <GiftCard.Container>
                    <GiftCard.CardContainer cardColor={'#1A66E9'}>
                        <View style={Styles.cardCircleBox}>
                            <View style={Styles.cardCircle}></View>
                            <View style={[Styles.cardCircle, Styles.cardCircle2]}></View>
                        </View>
                        <View style={[Styles.cardCircleBox, Styles.cardCircleBox2]}>
                            <View style={[Styles.cardCircle, Styles.cardCircle3]}></View>
                            <View style={[Styles.cardCircle, Styles.cardCircle4]}></View>
                        </View>
                        <GiftCard.TopContainer>
                            <Amazon />
                            <GiftCard.PriceContainer>
                                <GiftCard.CardTitle>Gift Card</GiftCard.CardTitle>
                                <View style={Styles.dollar}>
                                    <GiftCard.CardSubTitle>100.00</GiftCard.CardSubTitle>
                                    <GiftCard.CardSubTitle2>USD</GiftCard.CardSubTitle2>
                                </View>
                            </GiftCard.PriceContainer>
                        </GiftCard.TopContainer>
                        <GiftCard.BottomContainer>
                            {/* Right Side */}
                            <GiftCard.LeftSide>
                                <GiftCard.CardText>Special Gift on</GiftCard.CardText>
                                <GiftCard.CardText marginT={'marginT'}>Special Ocassions</GiftCard.CardText>
                                <GiftCard.CardText opac={opac}>Shop with gift card and earn 10% cashback</GiftCard.CardText>
                            </GiftCard.LeftSide>

                            {/* Left Side */}
                            <GiftCard.RightSide>
                                <GiftCard.CardBtn onPress={() => console.log('pressed')}>
                                    <Buy style={Styles.btnLogo} />
                                    <Text style={Styles.btnText}>Buy</Text>
                                </GiftCard.CardBtn>
                            </GiftCard.RightSide>
                        </GiftCard.BottomContainer>
                    </GiftCard.CardContainer>
                </GiftCard.Container>

                <GiftCard.Container>
                    <GiftCard.CardContainer cardColor={'#F29423'}>
                        <View style={Styles.cardCircleBox}>
                            <View style={Styles.cardCircle}></View>
                            <View style={[Styles.cardCircle, Styles.cardCircle2]}></View>
                        </View>
                        <View style={[Styles.cardCircleBox, Styles.cardCircleBox2]}>
                            <View style={[Styles.cardCircle, Styles.cardCircle3]}></View>
                            <View style={[Styles.cardCircle, Styles.cardCircle4]}></View>
                        </View>
                        <GiftCard.TopContainer>
                            <Airbnb />
                            <GiftCard.PriceContainer>
                                <GiftCard.CardTitle>Gift Card</GiftCard.CardTitle>
                                <View style={Styles.dollar}>
                                    <GiftCard.CardSubTitle>100.00</GiftCard.CardSubTitle>
                                    <GiftCard.CardSubTitle2>USD</GiftCard.CardSubTitle2>
                                </View>
                            </GiftCard.PriceContainer>
                        </GiftCard.TopContainer>
                        <GiftCard.BottomContainer>
                            {/* Right Side */}
                            <GiftCard.LeftSide>
                                <GiftCard.CardText>Special Gift on</GiftCard.CardText>
                                <GiftCard.CardText marginT={'marginT'}>Special Ocassions</GiftCard.CardText>
                                <GiftCard.CardText opac={opac}>Shop with gift card and earn 10% cashback</GiftCard.CardText>
                            </GiftCard.LeftSide>

                            {/* Left Side */}
                            <GiftCard.RightSide>
                                <GiftCard.CardBtn onPress={() => console.log('pressed')}>
                                    <Buy style={Styles.btnLogo} />
                                    <Text style={Styles.btnText}>Buy</Text>
                                </GiftCard.CardBtn>
                            </GiftCard.RightSide>
                        </GiftCard.BottomContainer>
                    </GiftCard.CardContainer>
                </GiftCard.Container>

                <GiftCard.Container>
                    <GiftCard.CardContainer cardColor={'#18C818'}>
                        <View style={Styles.cardCircleBox}>
                            <View style={Styles.cardCircle}></View>
                            <View style={[Styles.cardCircle, Styles.cardCircle2]}></View>
                        </View>
                        <View style={[Styles.cardCircleBox, Styles.cardCircleBox2]}>
                            <View style={[Styles.cardCircle, Styles.cardCircle3]}></View>
                            <View style={[Styles.cardCircle, Styles.cardCircle4]}></View>
                        </View>
                        <GiftCard.TopContainer>
                            <Icon />
                            <GiftCard.PriceContainer>
                                <GiftCard.CardTitle>Gift Card</GiftCard.CardTitle>
                                <View style={Styles.dollar}>
                                    <GiftCard.CardSubTitle>100.00</GiftCard.CardSubTitle>
                                    <GiftCard.CardSubTitle2>USD</GiftCard.CardSubTitle2>
                                </View>
                            </GiftCard.PriceContainer>
                        </GiftCard.TopContainer>
                        <GiftCard.BottomContainer>
                            {/* Right Side */}
                            <GiftCard.LeftSide>
                                <GiftCard.CardText>Special Gift on</GiftCard.CardText>
                                <GiftCard.CardText marginT={'marginT'}>Special Ocassions</GiftCard.CardText>
                                <GiftCard.CardText opac={opac}>Shop with gift card and earn 10% cashback</GiftCard.CardText>
                            </GiftCard.LeftSide>

                            {/* Left Side */}
                            <GiftCard.RightSide>
                                <GiftCard.CardBtn onPress={() => console.log('pressed')}>
                                    <Buy style={Styles.btnLogo} />
                                    <Text style={Styles.btnText}>Buy</Text>
                                </GiftCard.CardBtn>
                            </GiftCard.RightSide>
                        </GiftCard.BottomContainer>
                    </GiftCard.CardContainer>
                </GiftCard.Container>
            </GiftCard>
        </ScrollView>
    )
}