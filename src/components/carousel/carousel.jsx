import React from 'react';
import { View, Text, Image } from 'react-native'
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';

import { pics } from '../../store/gallery';

import styles from './style';

export default function Carousel() {
    const gallery = useSelector(pics);

    return (
        <View style={[styles.swiperContainer, { flex: 0.5 }]}>

            <Swiper
                style={styles.wrapper}
                autoplay={false}
                buttonWrapperStyle={{ alignItems: 'center' }}
                loop={false}
                showsButtons={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={true}>
                <View style={styles.slide1}>
                    <View style={styles.container}>
                        <View style={styles.bottomViewBox}>
                            <View style={styles.imageBox}>
                                {/* <Business width={200} height={200} /> */}
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    source={{
                                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.slide2}>
                    <View style={styles.container}>
                        <View style={styles.bottomViewBox}>
                            <View style={styles.imageBox}>
                                {/* <Jobs width={200} height={200} /> */}
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    source={{
                                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.slide3}>
                    <View style={styles.container}>
                        <View style={styles.bottomViewBox}>
                            <View style={styles.imageBox}>
                                {/* <Community width={200} height={200} /> */}
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    source={{
                                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.slide4}>
                    <View style={styles.container}>
                        <View style={styles.bottomViewBox}>
                            <View style={styles.imageBox}>
                                {/* <RealEstate width={200} height={200} /> */}
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    source={{
                                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Swiper>
        </View>)

}
