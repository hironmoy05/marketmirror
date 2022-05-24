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
                {
                    gallery[0]?.Data.map((item, index) => {
                        let section = 'styles.slide' + ++index;
                        return (
                            <View style={section} key={index}>
                                <View style={styles.container}>
                                    <View style={styles.bottomViewBox}>
                                        <View style={styles.imageBox}>
                                            <Image
                                                style={{ width: '100%', height: 350 }}
                                                resizeMode='contain'
                                                source={{
                                                    uri: item.image_small,
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>)

}
