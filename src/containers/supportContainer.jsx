import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import Report from '../assets/report.svg';
import DropDown from '../assets/dropdown.svg';
import {Styles} from '../styles';

export function SupportContainer() {
    const [inputText, setInputText] = useState('')

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <HeaderBarContainer headerTitle={'Supports'} buyContainer={Styles.flatHeader} />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                contentContainerStyle='position'
                KeyboardVerticalOffset='0'
            >
                <ScrollView>
                    <View style={Styles.supportContainer}>
                        <View>
                            <Text style={Styles.supportTitle}>Supports</Text>
                            <Text style={Styles.supportSubtitle}>select and report issues or concerns from here.</Text>
                        </View>

                        <View style={Styles.reportBox}>
                            <View style={Styles.supportRight}>
                                <Report />
                                <Text style={Styles.supportText}>Report issues or concerns</Text>
                            </View>
                            <DropDown />
                        </View>

                        <View style={styles.inputBox}>
                            <TextInput 
                                style={{flexBasis: '100%', height: '70%', borderBottomWidth: 2, borderBottomColor: '#D2D2D2', marginRight: 34, borderLeftColor: '#013567', fontFamily:'Open Sans Bold', paddingLeft: 15}} 
                                placeholder='Write Here' 
                                placeholderTextColor='#D2D2D2' 
                                value={inputText}
                                autoFocus={true}
                                blurOnSubmit={false}
                                onChangeText={(num) => setInputText(num)}
                            />
                            <View style={{backgroundColor: '#013567', height: 20, width: 3, position: 'absolute', bottom: 25}}></View>
                        </View>


                        <Pressable style={Styles.supportBtn} onPress={() => console.log('Support Button Pressed')}>
                            <Text style={Styles.supportBtnText}>Submit</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        paddingLeft: '5%', 
        paddingRight: '5%'
    },
    coinInputText: {
        fontFamily: 'Open Sans Bold', 
        fontSize: 25, 
        color: '#013567', 
        textAlign: 'left',
    },
    inputBox: {
        display: 'flex', 
        flexDirection:'row', 
        marginTop: '10%', 
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#013567',
        paddingTop: '5%',
        paddingBottom: '5%',
        marginTop: 'auto'
    }
})