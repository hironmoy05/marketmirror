import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView, KeyboardAvoidingView, StyleSheet} from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import Authentication from '../assets/2fa.svg';
import ToggleOn from '../assets/toggle_on.svg';
import ToggleOff from '../assets/toggle_off.svg';
import Email from '../assets/email.svg';
import Mobile from '../assets/mobile.svg';
import { Login } from '../components';
import {Registeration} from '../components';
import User from '../assets/user.svg';
import PhoneInput from 'react-native-phone-number-input';

export function ProfileContainer2() {
    const [toggleBtn, setToggleBtn] = useState(false);
    const [userName, setUserName] = useState('');
    const [nameInputColor, setNameInputColor] = useState(false);
    const [phoneNumberInputColor, setPhoneNumberInputColor] = useState(false);
    const [regEmailInputColor, setRegEmailInputColor] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const editBtn = {
        right: 0
    }

    return (
        <ScrollView style={{backgroundColor: '#fff',}}>

        <HeaderBarContainer headerTitle={'My Profile'} profilePage={'profilePage'} profilePage2={'profilePage2'} profileContainer={'profileContainer'} />

        <View style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: 30}}>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            contentContainerStyle='position'
            keyboardVerticalOffset='0'
            >
            
            <Login.FormBox>
                <Login.Label>Full Name</Login.Label>
                <Login.IconBox>
                    <User />
                </Login.IconBox>
                <Login.NameTextInput
                    nameInputColor={nameInputColor}
                    placeholderTextColor='#C9C9C9'
                    placeholder= "Please enter your Name"
                    value={userName}
                    returnKeyType='next'
                    name='userName'
                    onChangeText={name => setUserName(name)}
                    />
                <Text>As per Bank record and ID</Text>
            </Login.FormBox>

            <Login.FormBox>
                <Login.Label>Email ID</Login.Label>
                <Login.IconBox>
                    <Email />
                </Login.IconBox>
                <Login.RegEmailTextInput
                    regEmailInputColor={regEmailInputColor}
                    placeholderTextColor='#C9C9C9'
                    placeholder= "username@email.com"
                    keyboardType='email-address'
                    value={userEmail}
                    name='userEmail'
                    secure={true}
                    onChangeText={email => setUserEmail(email)}
                />
                <Text>can't be changed</Text>
            </Login.FormBox>

            <Login.FormBox>
                <Login.Label>Mobile</Login.Label>
                <Login.IconBox>
                    <Mobile />
                </Login.IconBox>
                <Registeration.FormBoxPicker phoneNumberInputColor={phoneNumberInputColor}>
                <View style={styles.container}>
                    <PhoneInput 
                        defaultValue={phoneNumber}
                        placeholder='Please enter phone number'
                        defaultCode="IN"
                        layout="second"
                        codeTextStyle={styles.container}
                        textInputStyle={styles.textInput}
                        containerStyle={{width: '100%', height: 50}}
                        textContainerStyle={styles.textInput}
                        onChangeFormattedText={text => {
                        setPhoneNumber(text);
                        }}
                    />
                </View>
            </Registeration.FormBoxPicker>
            <Text>can't be changed</Text>
        </Login.FormBox>
      
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', fontFamily: 'Open Sans Medium', paddingTop: 40}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Authentication style={{position: 'relative', left: 5}} />
                    <Text style={{marginLeft: 12, fontFamily: 'Open Sans Medium', fontSize: 17, color: '#212121'}}>+91 98374 XXXXX</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontFamily: 'Open Sans Medium', color: '#013567', top: 3, marginRight: 15}}>{toggleBtn ? 'Enable' : 'Disable'}</Text>
                    <Pressable onPress={() => setToggleBtn(!toggleBtn)}>{toggleBtn ? <ToggleOn /> : <ToggleOff style={{top: -6}} />}</Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        color: '#013567',
      },
      textInput: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        color: "#212121",
    },
})