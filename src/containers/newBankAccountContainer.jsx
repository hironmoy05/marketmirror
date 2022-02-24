import React, { useState, useRef } from 'react';
import { HeaderBarContainer } from './headerBarContainer';
import { View, Text, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import {Styles} from '../styles';
import { Login } from '../components';
import { Registeration } from '../components';
import { Picker } from '@react-native-picker/picker';
import Bank from '../assets/bank.svg';
import Number from '../assets/number.svg';
import Camera1 from '../assets/camera1.svg'

export function NewBankAccountsContainer() {
    const [selectCountryInputColor, setSelectCountryInputColor] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState();
    const [userName, setUserName] = useState('');  
    const [nameInputColor, setNameInputColor] = useState(false);

    const selectCountry = [
        'India',
        'Pakistan',
        'Nepal',
        'SriLanka',
        'Australia',
        'America',
        'New Zealand'
    ];

    const down = {
        top: '42px',
    }

    const pickerRef = useRef();

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }

    return (
        <>
        <HeaderBarContainer headerTitle='New Bank Accounts' buyContainer={Styles.flatHeader} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                contentContainerStyle='position'
                keyboardVerticalOffset='0'
            >
                <ScrollView
                    keyboardShouldPersistTops='hanlded'
                    style={{ backgroundColor: '#fff'}}
                >
                    <View style={[Styles.settingsContainer, {marginBottom: '5%'}]}>
                        <Text style={Styles.settingTitle}>Bank Account</Text>
                        <Text style={Styles.settingSubTitle}>Add New Bank Account</Text>

                        <Login.FormBox>
                        <Login.Label>Bank Name</Login.Label>
                        <Login.IconBox down={down}>
                            <Bank />
                        </Login.IconBox>
                        <Registeration.Frame selectCountryInputColor={selectCountryInputColor}>
                            <Picker
                                ref={pickerRef}
                                style={{fontFamily:'Opens Sans Serif'}, {marginLeft: -13}}
                                selectedValue={selectedCountry}
                                onValueChange={(itemValue, itemIndex) => 
                                    setSelectedCountry(itemValue)
                            }>
                                <Picker.Item style={{color:'#013567'}} label={'Select Bank'} enabled={false} />
                            {
                                selectCountry.map((list, i) => (
                                    <Picker.Item style={{color: '#212121', fontSize: 14}} key={i} label={list} value={list.toString()} />
                                ))
                            }
                            </Picker>
                        </Registeration.Frame>
                        </Login.FormBox>

                        <Login.FormBox>
                            <Login.Label>Account</Login.Label>
                            <Login.IconBox>
                                <Number style={{top: -3}} />
                            </Login.IconBox>
                            <Login.NameTextInput
                                nameInputColor={nameInputColor}
                                placeholderTextColor='#013567'
                                placeholder= "000095898585"
                                value={userName}
                                returnKeyType='next'
                                name='userName'
                                onChangeText={name => setUserName(name)}
                            />
                        </Login.FormBox>

                        <Login.FormBox>
                            <Login.Label>Confirm Account</Login.Label>
                            <Login.IconBox>
                                <Number style={{top: -3}} />
                            </Login.IconBox>
                            <Login.NameTextInput
                                nameInputColor={nameInputColor}
                                placeholderTextColor='#013567'
                                placeholder= "000095898585"
                                value={userName}
                                returnKeyType='next'
                                name='userName'
                                onChangeText={name => setUserName(name)}
                            />
                        </Login.FormBox>
                    
                        <Login.FormBox>
                            <Login.Label>IFSC Code</Login.Label>
                            <Login.IconBox>
                                <Number style={{top: -3}} />
                            </Login.IconBox>
                            <Login.NameTextInput
                                nameInputColor={nameInputColor}
                                placeholderTextColor='#013567'
                                placeholder= "HDFC00009574"
                                value={userName}
                                returnKeyType='next'
                                name='userName'
                                onChangeText={name => setUserName(name)}
                            />
                        </Login.FormBox>
                        
                        <Login.FormBox>
                            <Login.Label>Swift Code</Login.Label>
                            <Login.IconBox>
                                <Number style={{top: -3}} />
                            </Login.IconBox>
                            <Login.NameTextInput
                                nameInputColor={nameInputColor}
                                placeholderTextColor='#013567'
                                placeholder= "HDFC00009574"
                                value={userName}
                                returnKeyType='next'
                                name='userName'
                                onChangeText={name => setUserName(name)}
                            />
                        </Login.FormBox>

                        <Text style={{fontFamily:'Open Sans Bold', fontSize: 17, color: '#212121', marginTop: 30}}>Upload image of Canceled Cheque</Text>
                        <Text style={{fontFamily:'Open Sans Regular', fontSize: 15, color: '#707070', marginTop: 5, marginBottom: 10}}>or Account holder proof document</Text>
                        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '25%', paddingBottom: '25%', backgroundColor: '#E7EFFD', marginTop: '3%', border: '#D2D2D266'}}>
                            <Camera1 />
                        </View>

                        <Pressable style={{backgroundColor: '#013567', marginBottom: '10%', marginTop: '10%', borderRadius: 5, marginLeft: 15, marginRight: 15}}><Text style={{padding: '5%', textAlign: 'center', fontFamily: 'Open Sans Medium', color: '#fff', fontSize: 18}}>Submit for Verification</Text></Pressable>        

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

