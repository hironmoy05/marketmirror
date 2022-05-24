import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    moderateVerticalScale,
    moderateScale,
    scale,
} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import RNUpiPayment from 'react-native-upi-payment';

import { BASE_URL, CHECK_ADD_MONEY, ADD_MONEY } from '../constants/urls';
import colors from '../config/colors';
import { AppButton } from '../components/AppButton';
// import { walletDetails } from '../../store/dashboard';
import { pixelDeviceHeight, deviceWidth } from '../responsive';
import { filteredInput } from '../utils/filter';
import ErrorMessage from '../components/errorMessage';
import { payment } from '../models/payment';
import {
    getTransactionHistory,
    getTransactionHistoryInfo,
} from '../store/result';
import { YOUR_CLIENT_ID } from '../constants/urls';
import { getUserInfo } from '../store/bugs';
import {
    getWithdrawl,
    getWithdrawlHistory,
    withdrawalStatus
} from '../store/withdrawal';
// import { userProfile } from '../../store/users';
import { UPIAddress, Payeename } from '../constants/urls';

export const WalletTabContainer = () => {
    const dispatch = useDispatch();

    const userDetails = useSelector(getUserInfo);
    const historyInfo = useSelector(getTransactionHistoryInfo);
    //   const userDetails = useSelector(userProfile);

    const [changeText, setChangeText] = useState({ value: '' });
    const [changeTextSecond, setChangeTextSecond] = useState({ value: '' });
    const [showError, setShowError] = useState(false);
    const [addMoneyVisible, setAddMoneyVisible] = useState(false);
    const [withdrawMoneyVisible, setWithdrawMoneyVisible] = useState(false);
    const [selectPaymentMode, setSelectPaymentMode] = useState();
    const [paymentStatus, setpaymentStatus] = useState();
    const [id, setId] = useState();
    const [disabled, setDisabled] = useState(false);

    const userName = userDetails[0]?.Data.name;
    const userWallet = userDetails[0]?.Data.wallet;

    const pickerRef = useRef();

    function successCallback(data) {
        // do whatever with the data
        setpaymentStatus(data);
    }

    function failureCallback(data) {
        // do whatever with the data
        setpaymentStatus(data);
    }

    const upi = UPIAddress.split('@')[1];

    function initPayment(amt, payeename) {
        RNUpiPayment.initializePayment(
            {
                vpa: UPIAddress, // or can be john@ybl or mobileNo@upi
                payeeName: 'Narendera Kumar',
                amount: amt,
                transactionRef: 'aasf-332-aoei-fn',
            },
            successCallback,
            failureCallback,
        );
    }

    async function getId() {
        const userId = await AsyncStorage.getItem('user_Id').then(id => setId(id));
    }

    useEffect(() => {
        getId();
    }, []);

    async function getStatus(amt) {
        const DataToSend = {
            device_id: YOUR_CLIENT_ID,
            uid: id,
            amount: amt,
        };

        let formDetails = [];

        for (let key in DataToSend) {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(DataToSend[key]);
            formDetails.push(`${encodedKey}=${encodedValue}`);
        }

        formDetails = formDetails.join('&');

        fetch(BASE_URL + CHECK_ADD_MONEY, {
            method: 'POST',
            body: formDetails,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                const amount = changeText.value;
                if (amount > 0 && data.Status === 'Error') {
                    alert(data.Message);
                    setDisabled(true);
                } else if (amount > 0) {
                    setDisabled(false);
                }
            });
    }

    const amount = changeText.value;

    useEffect(() => {
        if (amount > 0) {
            getStatus(amount);
        }
    }, [amount]);

    const payStatus = paymentStatus?.status;
    useEffect(() => {
        if (amount > 0) {
            const DataToSend = {
                device_id: YOUR_CLIENT_ID,
                uid: id,
                amount,
                mode: upi,
                gstatus: paymentStatus?.status,
                txnid: paymentStatus?.txnId,
            };

            let formDetails = [];

            for (let key in DataToSend) {
                const encodedKey = encodeURIComponent(key);
                const encodedValue = encodeURIComponent(DataToSend[key]);
                formDetails.push(`${encodedKey}=${encodedValue}`);
            }

            formDetails = formDetails.join('&');

            const url = BASE_URL + ADD_MONEY;

            fetch(url, {
                method: 'POST',
                body: formDetails,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then(data => console.log('from wallet tab container', data.Message));
        }
    }, [payStatus]);

    async function addMoneyRequest() {
        const amount = changeText.value;

        if (amount === 10) {
            return setShowError(true);
        } else {
            setShowError(false);
        }

        setAddMoneyVisible(false);

        initPayment(amount, Payeename);
    }

    async function submitAmount() {
        const amount = changeTextSecond.value;
        if (amount === 10) {
            return setShowError(true);
        } else {
            setShowError(false);
        }

        if (selectPaymentMode) {
            return await AsyncStorage.getItem('user_Id').then(
                id => (
                    setWithdrawMoneyVisible(false),
                    dispatch(getWithdrawl(YOUR_CLIENT_ID, id, selectPaymentMode, amount))
                ),
            );
        }

        setChangeTextSecond({ value: '' });
        setSelectPaymentMode();
    }

    async function getUserId() {
        const userId = await AsyncStorage.getItem('user_Id').then(id =>
            dispatch(getTransactionHistory(YOUR_CLIENT_ID, id)),
        );
    }

    useEffect(() => {
        getUserId();
    }, []);

    const history = !!historyInfo?.Data ? historyInfo?.Data : [];

    return (
        <>
            {/* Add Money Modal */}
            <Modal
                isVisible={addMoneyVisible}
                deviceHeight={pixelDeviceHeight}
                deviceWidth={deviceWidth}
                backdropTransitionOutTiming={0}
                onBackdropPress={() => setAddMoneyVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Add Money</Text>
                        <TouchableOpacity onPress={() => setAddMoneyVisible(false)}>
                            <Image source={require('../assets/icons/close.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputBox}>
                        <Text>Enter Amount</Text>
                        <View style={styles.modalTextInputBox}>
                            <TextInput
                                placeholder="Enter Amount"
                                style={styles.modalTextInput}
                                onChange={e => filteredInput(e, setChangeText)}
                            />
                        </View>
                        <ErrorMessage error={'Minimum amount Rs: 50'} visible={showError} />
                        <AppButton
                            btnText={'Enter Amount'}
                            btnStyle={styles.modalBtnStyle}
                            onPress={() => addMoneyRequest()}
                            disabled={disabled}
                        />
                    </View>
                    <Text style={styles.bottomText}>
                        कम से कम ₹100 की धनराशि का भुगतान करें अन्यथा अन्यथा कंपनी की कोई
                        जिम्मेदारी नहीं होगी धनराशि जमा करने का समय सुबह 9:00 बजे से रात्रि
                        1:00 बजे तक रहेगा
                    </Text>
                </View>
            </Modal>

            {/* Withdraw Money Modal */}
            <Modal
                isVisible={withdrawMoneyVisible}
                deviceHeight={pixelDeviceHeight}
                deviceWidth={deviceWidth}
                backdropTransitionOutTiming={0}
                onBackdropPress={() => setWithdrawMoneyVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.title}>Withdraw Money</Text>
                        <TouchableOpacity onPress={() => setWithdrawMoneyVisible(false)}>
                            <Image source={require('../assets/icons/close.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputBox}>
                        <Text>Enter Amount</Text>
                        <View style={styles.modalTextInputBox}>
                            <TextInput
                                placeholder="Enter Amount"
                                style={styles.modalTextInput}
                                onChange={e => filteredInput(e, setChangeTextSecond)}
                            />
                        </View>
                        <ErrorMessage error={'Minimum amount Rs: 50'} visible={showError} />
                        <Text style={{ marginTop: moderateVerticalScale(30) }}>
                            Payment Mode
                        </Text>
                        <View
                            style={[styles.modalTextInputBox, { justifyContent: 'center' }]}>
                            <Picker
                                ref={pickerRef}
                                style={
                                    ({ fontFamily: 'Opens Sans Serif' },
                                        { marginLeft: -13, fontWeight: '100' })
                                }
                                selectedValue={selectPaymentMode}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectPaymentMode(itemValue)
                                }>
                                <Picker.Item
                                    style={{ color: colors.lightGrey2 }}
                                    label={'Payment Modes'}
                                    enabled={false}
                                />
                                {payment.map((list, i) => (
                                    <Picker.Item
                                        style={{ color: '#212121', fontSize: 14 }}
                                        key={i}
                                        label={list}
                                        value={list.toString()}
                                    />
                                ))}
                            </Picker>
                        </View>
                        <AppButton
                            btnText={'WITHDRAW'}
                            btnStyle={styles.modalBtnStyle}
                            onPress={() => {
                                submitAmount();
                            }}
                        />
                    </View>
                    <Text style={styles.bottomText}>
                        कम से कम ₹100 की धनराशि का भुगतान करें अन्यथा अन्यथा कंपनी की कोई
                        जिम्मेदारी नहीं होगी धनराशि जमा करने का समय सुबह 9:00 बजे से रात्रि
                        1:00 बजे तक रहेगा
                    </Text>
                </View>
            </Modal>

            <ScrollView>
                <View style={[styles.container, { marginBottom: moderateVerticalScale(65) }]}>
                    <View style={styles.displayContainer}>
                        <View style={styles.informBox}>
                            <View style={styles.userDetailBox}>
                                <Text style={styles.userDetailText}>{userName}</Text>
                                <Text style={styles.userDetailText}>
                                    Rs. {userWallet}
                                </Text>
                                <Text
                                    style={[
                                        styles.userDetailText,
                                        { color: colors.lightGrey, fontSize: scale(14) },
                                    ]}>
                                    Wallet Balance
                                </Text>
                            </View>
                            <View style={styles.btnBox}>
                                <AppButton
                                    btnText={'ADD MONEY'}
                                    btnTextStyle={{ fontSize: scale(16) }}
                                    btnStyle={styles.btn}
                                    img={require('../assets/icons/add.png')}
                                    tintColor={colors.white}
                                    onPress={() => setAddMoneyVisible(true)}
                                />
                                <AppButton
                                    btnText={'WITHDRAW'}
                                    btnTextStyle={{ fontSize: scale(16) }}
                                    btnStyle={styles.btn}
                                    img={require('../assets/icons/remove.png')}
                                    tintColor={colors.white}
                                    onPress={() => setWithdrawMoneyVisible(true)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailBox}>
                        <Text style={styles.detailTitle}>Statement</Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: moderateVerticalScale(10),
                                        alignItems: 'center',
                                    }}>
                                    <Text style={[styles.scrollHeader]}>Date</Text>
                                    <Text style={styles.scrollHeader}>Type</Text>
                                    <Text style={styles.scrollHeader}>Amount</Text>
                                    <Text style={styles.scrollHeader}>Description</Text>
                                </View>
                                {history?.map((item, index) => (
                                    <View style={{ flexDirection: 'row' }} key={index}>
                                        <Text style={[styles.scrollHeader, { paddingVertical: 5 }]}>
                                            {item ? item?.cdate : '10/05/2022'}
                                        </Text>
                                        <Text style={[styles.scrollHeader, { paddingVertical: 5 }]}>
                                            {item ? item?.type : 'CR'}
                                        </Text>
                                        <Text style={[styles.scrollHeader, { paddingVertical: 5 }]}>
                                            {item ? item?.amount : '10'}
                                        </Text>
                                        <Text style={[styles.scrollHeader, { paddingVertical: 5 }]}>
                                            {item
                                                ? item?.description
                                                : 'Bidding amount deducted for Gaziyabad on #47'}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};


// Styles
const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.white,
        paddingVertical: moderateVerticalScale(20),
    },
    modalHeader: {
        color: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
        paddingBottom: moderateVerticalScale(10),
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey3,
    },
    title: {
        fontSize: scale(17),
        fontWeight: '700',
    },
    inputBox: {
        paddingHorizontal: moderateScale(10),
        marginTop: moderateVerticalScale(20),
    },
    modalTextInputBox: {
        borderWidth: 1,
        borderColor: colors.lightGrey2,
        height: moderateScale(40),
        borderRadius: moderateScale(5),
    },
    modalTextInput: {},
    modalBtnStyle: {
        height: 'auto',
        backgroundColor: colors.primary,
        alignSelf: 'flex-start',
        paddingVertical: moderateVerticalScale(10),
        paddingHorizontal: moderateScale(15),
        marginTop: moderateVerticalScale(25),
    },
    bottomText: {
        paddingHorizontal: moderateScale(10),
        marginTop: moderateVerticalScale(8),
        lineHeight: 18,
    },

    // Modal End
    container: {
        padding: moderateScale(10),
    },
    displayContainer: {
        backgroundColor: colors.primaryLight,
        borderBottomLeftRadius: moderateScale(35),
        borderBottomRightRadius: moderateScale(35),
        paddingBottom: moderateVerticalScale(30),
    },
    informBox: {
        padding: moderateScale(20),
    },
    scrollTextBox: {
        marginTop: moderateVerticalScale(-5),
    },
    scrollText: {
        color: colors.white,
        fontSize: scale(15),
    },
    winnerBox: {
        backgroundColor: colors.white,
        paddingVertical: moderateVerticalScale(20),
        alignItems: 'center',
        paddingBottom: moderateVerticalScale(0),
    },
    winnerText: {
        fontSize: scale(17),
        fontWeight: '900',
        marginBottom: moderateVerticalScale(18),
        letterSpacing: 1,
    },
    userDetailBox: {
        marginTop: moderateVerticalScale(20),
        alignItems: 'center',
    },
    userDetailText: {
        marginTop: moderateVerticalScale(10),
        color: colors.white,
        fontSize: scale(16),
    },
    scrollTitle: {
        textAlign: 'center',
        fontSize: scale(23),
        fontWeight: '700',
        color: colors.black,
    },
    bottomContainer: {
        alignItems: 'center',
    },
    btnBox: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(20),
        justifyContent: 'space-evenly',
    },
    btn: {
        height: 'auto',
        borderWidth: 2,
        borderColor: colors.white,
        alignSelf: 'center',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateVerticalScale(5),
    },
    detailBox: {
        alignItems: 'center',
        marginTop: moderateVerticalScale(10),
    },
    detailTitle: {
        color: colors.primaryColor,
        fontSize: scale(18),
    },
    detailContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: moderateVerticalScale(20),
    },
    detailHeader: {
        fontSize: scale(13),
        textAlign: 'center',
        paddingVertical: moderateVerticalScale(10),
    },

    // Transaction
    scrollHeader: {
        fontSize: scale(13),
        width: moderateScale(100),
        textAlign: 'center',
        paddingVertical: moderateVerticalScale(10),
        backgroundColor: colors.lightGrey3,
    },
});

