import React, {useState} from 'react';
import { HeaderBarContainer } from './headerBarContainer';
import { ScrollView, View, Text } from 'react-native';
import { Styles } from '../styles';
import CheckBox from '@react-native-community/checkbox';

export function PrivacyPolicyContainer() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <>
            <HeaderBarContainer headerTitle='Privacy Policy' buyContainer={Styles.flatHeader} />

            <ScrollView
            keyboardShouldPersistTops='hanlded'
            style={{ backgroundColor: '#fff'}}
            >
                <View style={[Styles.settingsContainer, {marginBottom: '5%'}]}>
                    <Text style={Styles.settingTitle}>Privacy Policy</Text>
                    <Text style={Styles.settingSubTitle}>Please read our Privacy Policy for your reference</Text>

                    <Text style={{fontFamily: 'Open Sans Bold', marginTop: '5%', color: '#0D0E15', fontSize: 17}}>Privacy Policy</Text>
                    <Text style={{fontFamily: 'Open Sans Bold', marginTop: '3%', color: '#707070'}}>
                    Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service ... provider and a person who wants to use that service. Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service ... provider and a person who wants to use that service.  
                    </Text>

                    <Text style={{fontFamily: 'Open Sans Bold', marginTop: '5%'}}>
                    Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service ... provider and a person who wants to use that service. Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service ... provider and a person who wants to use that service. Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service ... provider and a person who wants to use that service. Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service ... provider and a person who wants to use that service.
                    </Text>
                </View>
             </ScrollView>   
        </>
    )
}