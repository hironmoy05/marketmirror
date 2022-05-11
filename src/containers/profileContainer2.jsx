import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, TouchableOpacity, ScrollView, KeyboardAvoidingView, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Registeration } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ref } from 'yup';
import DatePicker from 'react-native-date-picker';
import ErrorMessage from '../components/errorMessage';

import { HeaderBarContainer } from './headerBarContainer';
import Country from '../assets/country.svg';
import { Login } from '../components';
import User from '../assets/user.svg';
import {
    sentEmailStatus,
    sendOtpToVerifyEmail,
    checkOtpToVerifyEmail,
    sentEmailOtpStatus,
} from '../store/verifyEmailApi';
import {
    getCountryLists,
    getStateLists,
    statesListing,
    getCityLists,
    countryListing,
    cityListing,
} from '../store/localtionListing';
import { updateProfileInfo } from '../store/users';
import colors from '../config/colors';
import { getUserInfo } from '../store/bugs';

const validateSchema = Yup.object().shape({
    address1: Yup.string()
        .matches(/^[aA-zZ0-9@# :\-\,\\/.]*$/, 'Only allow @ # - /symbols')
        .min(4)
        .max(20)
        .label('Address'),
    occupation: Yup.string()
        .matches(/^[a-zA-Z0-9]*$/, 'Only alphabets and numbers are allowed ')
        .min(4)
        .max(20)
        .label('Occupation'),
});

export function ProfileContainer2() {
    const [toggleBtn, setToggleBtn] = useState(false);
    const [userName, setUserName] = useState('');
    const [nameInputColor, setNameInputColor] = useState(false);
    const [phoneNumberInputColor, setPhoneNumberInputColor] = useState(false);
    const [regEmailInputColor, setRegEmailInputColor] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCountryId, setSelectedCountryId] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedStateId, setSelectedStateId] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [selectedCityId, setSelectedCityId] = useState();
    const [countryIndex, setCountryIndex] = useState();
    const [isCountryClicked, setIsCountryClicked] = useState(false);
    const [stateIndex, setStateIndex] = useState();
    const [cityIndex, setCityIndex] = useState();
    const [genderId, setGenderId] = useState();
    const [open, setOpen] = useState(false);
    const [pickerDate, setPickerDate] = useState(new Date());
    const [genderValue, setGenderValue] = useState();
    const userDetails = useSelector(getUserInfo);

    const dispatch = useDispatch();


    const mailStatus = useSelector(sentEmailStatus);

    const sentMessageStatus = mailStatus.Status ? mailStatus.Status : '';
    const countryLists = useSelector(countryListing);
    const stateLists = useSelector(statesListing);
    const cityLists = useSelector(cityListing);

    const editBtn = {
        right: 0
    }

    const down = {
        top: 18 + 'px',
    };

    const pTop = {
        top: -12
    }

    const pickerRef = useRef();

    // function open() {
    //     pickerRef.current.focus();
    // }

    // function close() {
    //     pickerRef.current.blur();
    // }

    const gender = [
        {
            id: 1,
            gender: 'male',
        },
        {
            id: 2,
            gender: 'female',
        },
        {
            id: 3,
            gender: 'other'
        }
    ]

    useEffect(() => {
        dispatch(getCountryLists());
    }, [sentMessageStatus]);

    useEffect(() => {
        dispatch(getStateLists(selectedCountryId));
    }, [selectedCountryId, isCountryClicked]);

    useEffect(() => {
        dispatch(getCityLists(selectedStateId));
    }, [selectedStateId]);

    const selectCountry = [];
    countryLists?.forEach(item => selectCountry.push(item.title));
    useEffect(() => {
        countryLists?.find(
            item =>
                item.title === selectCountry[countryIndex - 1] &&
                setSelectedCountryId(item.id),
        );
    }, [countryIndex]);

    // item => item.title === selectCountry[0] && console.log('from find ', item)

    // Set States
    const selectState = [];
    stateLists?.forEach(item => selectState.push(item.title));
    useEffect(() => {
        stateLists?.find(
            item =>
                item.title === selectState[stateIndex - 1] &&
                setSelectedStateId(item.id),
        );
    }, [stateIndex]);

    // Set cities
    const selectCity = [];
    cityLists?.forEach(item => selectCity.push(item.title));
    useEffect(() => {
        cityLists?.find(
            item =>
                item.title === selectCity[cityIndex - 1] && setSelectedCityId(item.id),
        );
    }, [cityIndex]);

    function handleSubmitButton(address, occupation) {
        const date = pickerDate.getDate();
        const month = pickerDate.getMonth();
        const year = pickerDate.getFullYear();
        const dob = `${date} / ${month} / ${year}`;
        // console.log('from', address, countryIndex, stateIndex, cityIndex, genderId, date, occupation)
        const id = userDetails[0].Data.uid;
        dispatch(updateProfileInfo(id, address, countryIndex, stateIndex, cityIndex, genderId, dob, occupation));
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff', }}>

            <HeaderBarContainer headerTitle={'My Profile'} profilePage={'profilePage'} profilePage2={'profilePage2'} />

            <Formik
                initialValues={{
                    address1: '',
                    occupation: '',
                }}
                onSubmit={values =>
                    handleSubmitButton(
                        values.address1,
                        values.occupation
                    )
                }
                enableReinitialize={true}
                validationSchema={validateSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    setFieldTouched,
                    touched,
                }) => (
                    <View style={{ paddingLeft: '10%', paddingBottom: '10%', paddingRight: '10%', paddingTop: 30 }}>
                        <KeyboardAvoidingView>
                            <Login.FormBox>
                                <Login.Label>Address</Login.Label>
                                <Login.IconBox>
                                    <User />
                                </Login.IconBox>
                                <Login.NameTextInput
                                    nameInputColor={nameInputColor}
                                    placeholderTextColor='#C9C9C9'
                                    placeholder="Street Address"
                                    onBlur={() => setFieldTouched('address1')}
                                    returnKeyType='next'
                                    name='address1'
                                    onChangeText={handleChange('address1')}
                                />
                            </Login.FormBox>
                            <ErrorMessage
                                error={errors.address1}
                                visible={touched.address1}
                            />

                            <Login.FormBox>
                                <Registeration.Frame>
                                    <Login.Label pTop={pTop}>Country</Login.Label>
                                    <Login.IconBox down={down}>
                                        <Country />
                                    </Login.IconBox>
                                    <Picker
                                        ref={pickerRef}
                                        style={
                                            ({ fontFamily: 'Opens Sans Serif' },
                                                { marginLeft: -13 })
                                        }
                                        selectedValue={selectedCountry}
                                        onValueChange={(itemValue, itemIndex) => (
                                            setSelectedCountry(itemValue),
                                            setCountryIndex(itemIndex)
                                        )}>
                                        <Picker.Item
                                            style={{
                                                color: values.country
                                                    ? colors.primaryDark
                                                    : colors.lightGrey3,
                                            }}
                                            label={'Select Country'}
                                            enabled={false}
                                        />
                                        {selectCountry.map((list, i) => (
                                            <Picker.Item
                                                style={{ color: '#212121', fontSize: 14 }}
                                                key={i}
                                                label={list}
                                                value={list.toString()}
                                            />
                                        ))}
                                    </Picker>
                                </Registeration.Frame>
                            </Login.FormBox>
                            <Login.FormBox>
                                <Login.Label>State</Login.Label>
                                <Login.IconBox>
                                    <Country />
                                </Login.IconBox>
                                <Registeration.Frame>
                                    <Picker
                                        ref={pickerRef}
                                        style={
                                            ({ fontFamily: 'Opens Sans Serif' },
                                                { marginLeft: -13 })
                                        }
                                        selectedValue={selectedState}
                                        onValueChange={(itemValue, itemIndex) => (
                                            setSelectedState(itemValue),
                                            setStateIndex(itemIndex)
                                        )}>
                                        <Picker.Item
                                            style={{
                                                color: values.state
                                                    ? colors.primaryDark
                                                    : colors.lightGrey3,
                                            }}
                                            label={'Select State'}
                                            enabled={false}
                                        />
                                        {selectState.map((list, i) => (
                                            <Picker.Item
                                                style={{ color: '#212121', fontSize: 14 }}
                                                key={i}
                                                label={list}
                                                value={list.toString()}
                                            />
                                        ))}
                                    </Picker>
                                </Registeration.Frame>
                            </Login.FormBox>

                            <Login.FormBox>
                                <Login.Label>City</Login.Label>
                                <Login.IconBox>
                                    <Country />
                                </Login.IconBox>
                                <Registeration.Frame>
                                    <Picker
                                        ref={pickerRef}
                                        style={
                                            ({ fontFamily: 'Opens Sans Serif' },
                                                { marginLeft: -13 })
                                        }
                                        selectedValue={selectedCity}
                                        onValueChange={(itemValue, itemIndex) => (
                                            setSelectedCity(itemValue), setCityIndex(itemIndex)
                                        )}>
                                        <Picker.Item
                                            style={{
                                                color: values.city
                                                    ? colors.primaryDark
                                                    : colors.lightGrey3,
                                            }}
                                            label={'Select City'}
                                            enabled={false}
                                        />
                                        {selectCity.map((list, i) => (
                                            <Picker.Item
                                                style={{ color: '#212121', fontSize: 14 }}
                                                key={i}
                                                label={list}
                                                value={list.toString()}
                                            />
                                        ))}
                                    </Picker>
                                </Registeration.Frame>
                            </Login.FormBox>
                            <Login.FormBox>
                                <Login.Label>Gender</Login.Label>
                                <Login.IconBox>
                                    <User />
                                </Login.IconBox>
                                <Registeration.Frame>
                                    <Picker
                                        ref={pickerRef}
                                        style={
                                            ({ fontFamily: 'Opens Sans Serif' },
                                                { marginLeft: -13 })
                                        }
                                        selectedValue={genderValue}
                                        onValueChange={(itemValue, itemIndex) => (
                                            setGenderId(itemIndex), setGenderValue(itemValue)
                                        )}>
                                        <Picker.Item
                                            style={{
                                                color: values.city
                                                    ? colors.primaryDark
                                                    : colors.lightGrey3,
                                            }}
                                            label={'Gender'}
                                            enabled={false}
                                        />
                                        {gender.map((list, i) => (
                                            <Picker.Item
                                                style={{ color: '#212121', fontSize: 14 }}
                                                key={i}
                                                label={list.gender}
                                                value={list.gender.toString()}
                                            />
                                        ))}
                                    </Picker>
                                </Registeration.Frame>
                            </Login.FormBox>

                            <Login.FormBox>
                                <View style={{ top: 5 }}>
                                    <Login.Label>Date</Login.Label>
                                </View>
                                <View style={{ top: 6 }}>
                                    <Login.IconBox>
                                        <User />
                                    </Login.IconBox>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    padding={30}
                                    onPress={() => setOpen(true)}
                                    style={styles.dropdownContainer}>
                                    <DatePicker
                                        modal
                                        open={open}
                                        date={pickerDate}
                                        onConfirm={date => {
                                            setOpen(false);
                                            setPickerDate(date);
                                        }}
                                        onCancel={() => {
                                            setOpen(false);
                                        }}
                                        theme={'auto'}
                                        mode={'date'}
                                        locale="en"
                                        is24hourSource="device"
                                        onDateChange={setPickerDate}
                                    />
                                    <View
                                        style={{ flexDirection: 'row', marginLeft: 4 }}>
                                        <Text style={{ marginRight: 5, color: colors.black }}>
                                            {pickerDate.getDate()} /
                                        </Text>
                                        <Text style={{ marginRight: 5, color: colors.black }}>
                                            {pickerDate.getMonth() + 1} /
                                        </Text>
                                        <Text style={{ color: colors.black }}>{pickerDate.getFullYear()}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Login.FormBox>
                            <Login.FormBox>
                                <Login.Label>Occupation</Login.Label>
                                <Login.IconBox>
                                    <User />
                                </Login.IconBox>
                                <Login.NameTextInput
                                    nameInputColor={nameInputColor}
                                    placeholderTextColor='#C9C9C9'
                                    placeholder="Occupation"
                                    returnKeyType='next'
                                    onBlur={() => setFieldTouched('occupation')}
                                    name='occupation'
                                    onChangeText={handleChange('occupation')}
                                />
                            </Login.FormBox>
                            <ErrorMessage
                                error={errors.occupation}
                                visible={touched.occupation}
                            />
                            <View style={{ marginTop: 30 }}>
                                <Button onPress={handleSubmit} title='Submit' />
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                )}
            </Formik>
        </ScrollView >
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
    dropdownContainer: {
        justifyContent: 'center',
        paddingLeft: 35,
        marginTop: 30,
        paddingVertical: 18,
        borderWidth: 2,
        borderColor: colors.lightGrey2,
        borderRadius: 10
    },
})