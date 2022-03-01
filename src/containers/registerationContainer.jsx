import React, {useState, useRef, useEffect} from 'react';
import {Login} from '../components';
import {Registeration} from '../components';
import Email from '../assets/email.svg';
import Country from '../assets/country.svg';
import VerifyCheck from '../assets/verify_check.svg';
import User from '../assets/user.svg';
import Mobile from '../assets/mobile.svg';
import LogoTop from '../assets/mm_logo_top.svg';
import Toast from 'react-native-root-toast';
import {BASE_URL, USER_REGISTER} from '../constants/urls';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Text,
  Alert,
  SafeAreaView,
} from 'react-native';
import Success from '../assets/success.svg';
import {Picker} from '@react-native-picker/picker';
import PhoneInput from 'react-native-phone-number-input';
import {Button, Checkbox} from 'react-native-paper';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import Cross from '../assets/cross.svg';
import CheckBox from '@react-native-community/checkbox';
import {PixelDeviceHeight, deviceWidth, deviceHeight} from '../responsive';
import Loader from './loaderContainer';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ref} from 'yup';
import ErrorMessage from '../components/errorMessage';
import {
  sentEmailStatus,
  sendOtpToVerifyEmail,
  checkOtpToVerifyEmail,
  sentEmailOtpStatus,
} from '../store/verifyEmailApi';
import {useDispatch, useSelector} from 'react-redux';
import {useFormikContext} from 'formik';
import {set} from 'lodash';
import {signoutRequest} from '../store/api';
import AppText from '../components/appText';
import colors from '../config/colors';
import {color} from 'react-native-reanimated';

const validateSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(20).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string()
    .min(6, 'Required')
    .required('Required')
    .max(12)
    .label('Password'),
  retypePassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords do not match')
    .label('RetypePassword'),
});

export const RegisterationContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const mailStatus = useSelector(sentEmailStatus);
  const mailOtpStatus = useSelector(sentEmailOtpStatus);

  const sentMessageStatus = mailStatus.Status ? mailStatus.Status : '';
  const sentOtpMsgStatus = mailOtpStatus.Status ? mailOtpStatus.Status : '';

  console.log('VERIFY EMAIL OTP', sentMessageStatus);
  console.log('VERIFY OTP', sentOtpMsgStatus);

  // console.log(mailStatus ? mailStatus : '');

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isEmailVerify, setIsEmailVerify] = useState(false);
  const [isPhoneVerify, setIsPhoneVerify] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isRegisterationSuccess, setIsRegisterationSuccess] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [nameInputColor, setNameInputColor] = useState(false);
  const [regEmailInputColor, setRegEmailInputColor] = useState(false);
  const [selectCountryInputColor, setSelectCountryInputColor] = useState(false);
  const [selectStateInputColor, setSelectStateInputColor] = useState(false);
  const [phoneNumberInputColor, setPhoneNumberInputColor] = useState(false);
  const [regPasswordInputColor, setRegPasswordInputColor] = useState(false);
  const [regRetypePasswordInputColor, setRegRetypePasswordInputColor] =
    useState(false);
  const [buttonInputColor, setButtonInputColor] = useState(false);
  const [visibility, setvisibility] = useState(false);
  const [formikEmail, setFormikEmail] = useState('');
  const [firstModal, setFirstModal] = useState(false);
  const [crossClick, setCrossClick] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const selectCountry = [
    'India',
    'Pakistan',
    'Nepal',
    'SriLanka',
    'Australia',
    'America',
    'New Zealand',
  ];

  const selectState = [
    'Bihar',
    'Haryana',
    'Karnataka',
    'Maharashtra',
    'Uttar Pradesh',
  ];

  function getEmail(email) {
    console.log(email);
  }

  const down = {
    top: '45px',
  };

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const phoneInput = useRef(null);

  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();
  const fifthInputRef = useRef();
  const sixthInputRef = useRef();

  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [six, setSix] = useState();

  const [button, setButton] = useState(true);

  const containerHeight = {
    top: '16%',
  };

  const url = BASE_URL + USER_REGISTER;

  console.log(phoneNumber);

  const handleSubmitButton = (name, email, password) => {
    setErrorText('');

    setLoading(true);

    let dataToSend = {
      name: name,
      email: email,
      mobile: phoneNumber,
      country: selectedCountry,
      password: password,
    };

    let formDetails = [];

    for (let key in dataToSend) {
      let encodeKey = encodeURIComponent(key);
      let encodeValue = encodeURIComponent(dataToSend[key]);
      formDetails.push(encodeKey + '=' + encodeValue);
    }
    formDetails = formDetails.join('&');

    fetch(url, {
      method: 'POST',
      body: formDetails,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => {
        setLoading(false);

        Toast.show(json.Message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });

        // if data is matched
        if (json.Status === 'Success') {
          setIsRegisterationSuccess(true);
          Alert.alert(
            'Congratulations!!',
            'Registration Successful. Please login to proceed',
            [{text: 'OK', onPress: () => navigation.navigate('Login')}],
          );
        } else {
          console.log(json.Status);
          setErrorText(json.Status);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  // GETTING VALUES FROM FORMIK
  function GetFormikValues() {
    const {values} = useFormikContext();
    console.log(values.name);

    const numArr = [one, two, three, four, five, six];
    const numOtp = numArr.join('');

    useEffect(() => {}, [numOtp]);

    // dispatch(getEmailOtpStatus(userEmail));

    return null;
  }

  useEffect(() => {
    if (sentMessageStatus === 'Error') {
      setFirstModal(false);
    }

    if (sentMessageStatus === 'Success') {
      setFirstModal(true);
      setCrossClick(!crossClick);
    }
    dispatch(signoutRequest());
  }, [sentMessageStatus]);

  useEffect(() => {
    if (sentOtpMsgStatus === 'Error') return;

    if (sentOtpMsgStatus === 'Success') {
      setFirstModal(false);
      setVerifyOtp(true);
      // setEmailOtpVerified(true);
    }

    setOne();
    setTwo();
    setThree();
    setFour();
    setFive();
    setSix();
  }, [sentOtpMsgStatus]);

  function handleEmailModal() {
    return setIsEmailVerify(false);
  }

  function handlePhoneModal() {
    const numArr = [one, two, three, four, five, six];
    const numOtp = numArr.join('');

    if (numOtp === '111111') {
      setPhoneOtpVerified(true);
    }
    setOne();
    setTwo();
    setThree();
    setFour();
    setFive();
    setSix();
    return setIsPhoneVerify(false);
  }

  useEffect(() => {
    userName ? setNameInputColor(true) : setNameInputColor(false);
    userEmail ? setRegEmailInputColor(true) : setRegEmailInputColor(false);
    selectedCountry
      ? setSelectCountryInputColor(true)
      : setRegEmailInputColor(false);
    selectedState
      ? setSelectStateInputColor(true)
      : setRegEmailInputColor(false);
    phoneNumber
      ? setPhoneNumberInputColor(true)
      : setPhoneNumberInputColor(false);
    password ? setRegPasswordInputColor(true) : setRegPasswordInputColor(false);
    retypePassword
      ? setRegRetypePasswordInputColor(true)
      : setRegRetypePasswordInputColor(false);
    userName &&
    userEmail &&
    selectedCountry &&
    phoneNumber &&
    password &&
    retypePassword
      ? setButtonInputColor(true)
      : setButtonInputColor(false);
    userName &&
    userEmail &&
    selectedCountry &&
    selectedState &&
    phoneNumber &&
    password &&
    retypePassword
      ? setButton(false)
      : setButton(true);
    phoneNumber && setvisibility(true);
  }, [
    userName,
    userEmail,
    selectedCountry,
    selectedState,
    phoneNumber,
    password,
    retypePassword,
  ]);

  // TOAST
  // !toggleCheckBox && Toast.show('checkBox must be checked', {
  //   duration: Toast.durations.LONG,
  //   position: Toast.positions.TOP,
  //   shadow: true,
  //   animation: true,
  //   hideOnPress: true,
  //   delay: 0,
  // });

  return (
    <SafeAreaView
      style={{position: 'relative', flex: 1, backgroundColor: '#fff'}}>
      <Loader loading={loading} />
      {console.log('from first modal', firstModal)}
      <Modal
        isVisible={firstModal}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}>
        <View style={styles.popup}>
          <View style={styles.cross}>
            <Pressable
              onPress={() => {
                console.log('from cross', crossClick);
                setFirstModal(false);
                // crossClick && setCrossClick(!crossClick);
              }}>
              <Cross />
            </Pressable>
          </View>
          <View>
            <Text style={styles.title}>Verify Email</Text>
            <Text style={styles.subTitle}>
              Please enter the verification code to Verify Email ID we just sent
              you.
            </Text>
          </View>
          <View style={styles.otp}>
            <Text>Enter OTP</Text>
            <Text>Time Left: 00:02</Text>
          </View>
          <View style={styles.digits}>
            <TextInput
              style={styles.number}
              ref={firstInputRef}
              keyboardType="numeric"
              placeholder="0"
              returnKeyType="next"
              value={one}
              maxLength={1}
              autoFocus={true}
              blurOnSubmit={false}
              onChangeText={num => {
                setOne(num);
                num && secondInputRef.current.focus();
              }}
            />

            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              returnKeyType="next"
              value={two}
              maxLength={1}
              ref={secondInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setTwo(num);
                num && thirdInputRef.current.focus();
              }}
            />

            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              returnKeyType="next"
              value={three}
              maxLength={1}
              ref={thirdInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setThree(num);
                num && fourthInputRef.current.focus();
              }}
            />

            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              returnKeyType="next"
              value={four}
              maxLength={1}
              ref={fourthInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setFour(num);
                num && fifthInputRef.current.focus();
              }}
            />

            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              returnKeyType="next"
              value={five}
              maxLength={1}
              ref={fifthInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setFive(num);
                num && sixthInputRef.current.focus();
              }}
            />

            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              returnKeyType="next"
              value={six}
              maxLength={1}
              ref={sixthInputRef}
              blurOnSubmit={false}
              onChangeText={num => setSix(num)}
            />
          </View>
          <View style={styles.resendCode}>
            <Pressable onPress={() => console.log('resend code')}>
              <Text style={styles.resendCodeText}>Resend Code</Text>
            </Pressable>
          </View>
          <Button
            onPress={() => {
              const numArr = [one, two, three, four, five, six];
              const numOtp = numArr.join('');
              dispatch(checkOtpToVerifyEmail(formikEmail, numOtp));
            }}
            style={styles.button}
            mode="contained">
            Submit
          </Button>
        </View>
      </Modal>

      {/* Phone Modal */}
      <Modal
        isVisible={isPhoneVerify}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}>
        <View style={styles.popup}>
          <View style={styles.cross}>
            <Pressable onPress={() => setIsPhoneVerify(false)}>
              <Cross />
            </Pressable>
          </View>
          <View>
            <Text style={styles.title}>Phone Verify</Text>
            <Text style={styles.subTitle}>
              Please enter the verification code to Verify Email ID we just sent
              you.
            </Text>
          </View>
          <View style={styles.otp}>
            <Text>Enter OTP</Text>
            <Text>Time Left: 00:02</Text>
          </View>
          <View style={styles.digits}>
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              value={one}
              maxLength={1}
              autoFocus={true}
              blurOnSubmit={false}
              onChangeText={num => {
                setOne(num);
                num && secondInputRef.current.focus();
              }}
            />
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              value={two}
              maxLength={1}
              ref={secondInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setTwo(num);
                num && thirdInputRef.current.focus();
              }}
            />
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              value={three}
              maxLength={1}
              ref={thirdInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setThree(num);
                num && fourthInputRef.current.focus();
              }}
            />
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              value={four}
              maxLength={1}
              ref={fourthInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setFour(num);
                num && fifthInputRef.current.focus();
              }}
            />
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              value={five}
              maxLength={1}
              ref={fifthInputRef}
              blurOnSubmit={false}
              onChangeText={num => {
                setFive(num);
                num && sixthInputRef.current.focus();
              }}
            />
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              placeholder="0"
              value={six}
              maxLength={1}
              ref={sixthInputRef}
              blurOnSubmit={false}
              onChangeText={num => setSix(num)}
            />
          </View>
          <View style={styles.resendCode}>
            <Pressable onPress={() => console.log('resend code')}>
              <Text style={styles.resendCodeText}>Resend Code</Text>
            </Pressable>
          </View>
          <Button
            onPress={() => handlePhoneModal()}
            style={styles.button}
            mode="contained">
            Submit
          </Button>
        </View>
      </Modal>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle="position"
        keyboardVerticalOffset="0">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          containerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{height: deviceHeight + 250}}>
            <Login>
              <Login.SmallLogoBox>
                <LogoTop width={200} height={80} />
              </Login.SmallLogoBox>
            </Login>

            <Login.LoginContainer containerHeight={containerHeight}>
              <Login.LoginFormBox>
                <Login.LoginTitle>Registration</Login.LoginTitle>
                <Login.LoginSubTitle>Welcome in Finpath</Login.LoginSubTitle>
              </Login.LoginFormBox>

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  retypePassword: '',
                }}
                onSubmit={values =>
                  handleSubmitButton(
                    values.name,
                    values.email,
                    values.password,
                    values.retypePassword,
                  )
                }
                enableReinitialize={true}
                validationSchema={validateSchema}>
                {({
                  handleChange,
                  handleSubmit,
                  values,
                  errors,
                  setFieldTouched,
                  touched,
                }) => (
                  <>
                    <Login.FormBox>
                      <Login.Label>Full Name</Login.Label>
                      <Login.IconBox>
                        <User />
                      </Login.IconBox>
                      <Login.NameTextInput
                        nameInputColor={values.name ? true : false}
                        placeholderTextColor={colors.lightGrey3}
                        placeholder="Please enter your Name"
                        // value={userName}
                        onBlur={() => setFieldTouched('name')}
                        returnKeyType="next"
                        autoCapitalize="none"
                        name="userName"
                        required
                        onChangeText={handleChange('name')}
                      />
                    </Login.FormBox>
                    <ErrorMessage error={errors.name} visible={touched.name} />

                    <Login.FormBox>
                      <Login.Label>Email ID</Login.Label>
                      <Login.IconBox>
                        <Email />
                      </Login.IconBox>
                      <Pressable
                        style={styles.inputTextPosition}
                        onPress={() => {
                          dispatch(sendOtpToVerifyEmail(values.email));
                          setIsEmailVerify(true);
                          setFormikEmail(values.email);
                        }}>
                        {verifyOtp ? (
                          <View style={{top: 4}}>
                            <VerifyCheck />
                          </View>
                        ) : (
                          <Text
                            style={
                              values.email
                                ? styles.textVerifyShown
                                : styles.textVerify
                            }>
                            Verify
                          </Text>
                        )}
                      </Pressable>
                      <Login.RegEmailTextInput
                        regEmailInputColor={values.email ? true : false}
                        placeholderTextColor={colors.lightGrey3}
                        placeholder="username@email.com"
                        keyboardType="email-address"
                        // value={userEmail}
                        onBlur={() => setFieldTouched('email')}
                        name="userEmail"
                        autoCapitalize="none"
                        secure={true}
                        onChangeText={handleChange('email')}
                      />
                    </Login.FormBox>
                    <ErrorMessage
                      error={errors.email}
                      visible={touched.email}
                    />

                    <Login.FormBox>
                      <Login.Label>Country</Login.Label>
                      <Login.IconBox down={down}>
                        <Country />
                      </Login.IconBox>
                      <Registeration.Frame
                        selectCountryInputColor={selectCountryInputColor}>
                        <Picker
                          ref={pickerRef}
                          style={
                            ({fontFamily: 'Opens Sans Serif'},
                            {marginLeft: -13})
                          }
                          selectedValue={selectedCountry}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedCountry(itemValue)
                          }>
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
                              style={{color: '#212121', fontSize: 14}}
                              key={i}
                              label={list}
                              value={list.toString()}
                            />
                          ))}
                        </Picker>
                      </Registeration.Frame>
                    </Login.FormBox>

                    {visibility ? (
                      selectedCountry ? null : (
                        <Text style={{color: 'red'}}>
                          Country is required field
                        </Text>
                      )
                    ) : null}
                    <Login.FormBox>
                      <Login.Label>State</Login.Label>
                      <Login.IconBox down={down}>
                        <Country />
                      </Login.IconBox>
                      <Registeration.Frame
                        selectCountryInputColor={selectStateInputColor}>
                        <Picker
                          ref={pickerRef}
                          style={
                            ({fontFamily: 'Opens Sans Serif'},
                            {marginLeft: -13})
                          }
                          selectedValue={selectedState}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedState(itemValue)
                          }>
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
                              style={{color: '#212121', fontSize: 14}}
                              key={i}
                              label={list}
                              value={list.toString()}
                            />
                          ))}
                        </Picker>
                      </Registeration.Frame>
                    </Login.FormBox>

                    {visibility ? (
                      selectedState ? null : (
                        <Text style={{color: 'red'}}>
                          State is required field
                        </Text>
                      )
                    ) : null}
                    {/* <Login.FormBox>
                      <Login.Label>State</Login.Label>
                      <Login.IconBox down={down}>
                        <Country />
                      </Login.IconBox>
                      <Registeration.Frame
                        selectCountryInputColor={selectCountryInputColor}>
                        <Picker
                          ref={pickerRef}
                          style={
                            ({fontFamily: 'Opens Sans Serif'},
                            {marginLeft: -13})
                          }
                          selectedValue={selectedCountry}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedCountry(itemValue)
                          }>
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
                              style={{color: '#212121', fontSize: 14}}
                              key={i}
                              label={list}
                              value={list.toString()}
                            />
                          ))}
                        </Picker>
                      </Registeration.Frame>
                    </Login.FormBox>

                    {visibility ? (
                      selectedCountry ? null : (
                        <Text style={{color: 'red'}}>
                          Country is required field
                        </Text>
                      )
                    ) : null} */}

                    <Login.FormBox>
                      <Login.Label>Mobile</Login.Label>
                      <Login.IconBox>
                        <Mobile />
                      </Login.IconBox>
                      <Registeration.FormBoxPicker
                        phoneNumberInputColor={phoneNumber ? true : false}>
                        <Pressable
                          style={styles.phoneTextPosition}
                          onPress={() => setIsPhoneVerify(true)}>
                          {phoneOtpVerified ? (
                            <Pressable
                              onPress={() => setIsPhoneVerify(false)}
                              style={{top: 4}}>
                              <VerifyCheck />
                            </Pressable>
                          ) : (
                            <Text
                              style={
                                phoneNumber
                                  ? styles.textVerifyShown
                                  : styles.textVerify
                              }>
                              Verify
                            </Text>
                          )}
                        </Pressable>
                        <View style={styles.container}>
                          <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            placeholder="Please enter phone number"
                            defaultCode="IN"
                            layout="second"
                            codeTextStyle={styles.container}
                            textInputStyle={styles.textInput}
                            containerStyle={{width: '100%', height: 50}}
                            textContainerStyle={styles.textInput}
                            onBlur={() => setFieldTouched('phone')}
                            onChangeFormattedText={text => setPhoneNumber(text)}
                          />
                        </View>
                      </Registeration.FormBoxPicker>
                    </Login.FormBox>

                    {visibility ? (
                      phoneNumber ? null : (
                        <Text style={{color: 'red'}}>Required</Text>
                      )
                    ) : null}

                    <Login.FormBox>
                      <Login.Label>Password</Login.Label>
                      <Login.IconBox>
                        <User />
                      </Login.IconBox>
                      <Login.RegPasswordTextInput
                        regPasswordInputColor={values.password ? true : false}
                        placeholderTextColor={colors.lightGrey3}
                        placeholder="Please enter password"
                        secureTextEntry={true}
                        // value={password}
                        onBlur={() => setFieldTouched('password')}
                        name="text"
                        onChangeText={handleChange('password')}
                      />
                    </Login.FormBox>

                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />

                    <Login.FormBox>
                      <Login.Label>Retype Password</Login.Label>
                      <Login.IconBox>
                        <User />
                      </Login.IconBox>
                      <Login.RegRetypePasswordTextInput
                        regRetypePasswordInputColor={
                          values.retypePassword ? true : false
                        }
                        placeholderTextColor={colors.lightGrey3}
                        placeholder="Retype password"
                        // value={retypePassword}
                        onBlur={() => setFieldTouched('retypePassword')}
                        secureTextEntry={true}
                        name="retypePassword"
                        onChangeText={handleChange('retypePassword')}
                      />
                    </Login.FormBox>

                    <ErrorMessage
                      error={errors.retypePassword}
                      visible={touched.retypePassword}
                    />

                    <View
                      style={[
                        {display: 'flex'},
                        {flexDirection: 'row'},
                        {marginTop: '5%'},
                      ]}>
                      <CheckBox
                        // disabled={toggleCheckBox}
                        tintColors={{
                          true: colors.primaryDark,
                          false: '#121212',
                        }}
                        value={toggleCheckBox}
                        onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                      />
                      <Text
                        style={[
                          {width: '80%'},
                          {color: colors.lightGrey},
                          {marginLeft: '6%'},
                        ]}>
                        By registering an account you agree to our
                        <Pressable
                          onPress={() => console.log('Terms and Conditions')}>
                          <Text style={styles.termsText}>Terms of Service</Text>
                        </Pressable>{' '}
                        and
                        <Pressable
                          onPress={() => console.log('Privacy Policy')}>
                          <Text style={styles.termsText}>Privacy Policy</Text>
                        </Pressable>
                      </Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.7}>
                      <Login.RegFormButton
                        buttonInputColor={
                          values.name &&
                          values.email &&
                          verifyOtp &&
                          selectedCountry &&
                          phoneNumber &&
                          phoneOtpVerified &&
                          values.password &&
                          values.retypePassword &&
                          toggleCheckBox
                            ? true
                            : false
                        }
                        onPress={handleSubmit}
                        mode="contained"
                        disabled={
                          values.name &&
                          values.email &&
                          verifyOtp &&
                          selectedCountry &&
                          phoneNumber &&
                          phoneOtpVerified &&
                          values.password &&
                          values.retypePassword &&
                          toggleCheckBox
                            ? false
                            : true
                        }>
                        Registeraton
                      </Login.RegFormButton>
                    </TouchableOpacity>

                    <GetFormikValues />
                  </>
                )}
              </Formik>
            </Login.LoginContainer>
            <Login.LoginBox>
              <Login.RegisterTextBox>
                Already have an account{' '}
              </Login.RegisterTextBox>
              <Login.RegisterTextBox>
                <Pressable onPress={() => navigation.navigate('Login')}>
                  <AppText style={styles.linkText}>Login here</AppText>
                </Pressable>
              </Login.RegisterTextBox>
            </Login.LoginBox>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    color: colors.primaryDark,
  },
  button: {
    marginTop: 30,
    width: '75%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  textInputSelect: {
    color: '#212121',
  },

  textInput: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: '#212121',
  },

  inputTextPosition: {
    position: 'absolute',
    zIndex: 20,
    right: 20,
    top: 40,
  },

  textVerify: {
    display: 'none',
  },

  textVerifyShown: {
    fontFamily: 'Open Sans Bold',
    color: colors.primaryDark,
    letterSpacing: 2,
  },

  popup: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 'auto',
  },
  cross: {
    position: 'relative',
    marginLeft: 'auto',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Open Sans Bold',
    color: '#212121',
  },
  subTitle: {
    color: '#707070',
    marginTop: 6,
  },
  otp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  digits: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    // width: 45,
    // height: 45,
    backgroundColor: '#0135671A',
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendCode: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  resendCodeText: {
    fontSize: 16,
  },
  button: {
    marginTop: 'auto',
    padding: 8,
    borderRadius: 5,
    backgroundColor: colors.primaryDark,
    marginTop: 20,
  },
  number: {
    fontFamily: 'Open Sans Bold',
    fontSize: 30,
    marginTop: 20,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#013567',
    marginRight: 5,
    backgroundColor: '#0135671A',
    padding: 0,
    textAlign: 'center',
    color: '#212121',
  },
  phoneTextPosition: {
    position: 'absolute',
    zIndex: 200,
    top: 15,
    right: 20,
  },

  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: color.white,
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16,
  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  termsText: {
    fontFamily: 'Open Sans Bold',
    color: colors.primaryDark,
    top: 3,
    marginLeft: 2,
  },
  linkText: {
    fontFamily: 'Open Sans Bold',
    fontSize: 15,
    color: colors.primaryDark,
    textDecorationLine: 'underline',
    textDecorationColor: colors.primaryDark,
    textDecorationStyle: 'solid',
    top: 5,
  },
});
