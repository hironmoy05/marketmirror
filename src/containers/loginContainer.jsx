import React, {useState, useRef, useEffect} from 'react';
import {Login} from '../components';
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';
import Eye from '../assets/Eye.svg';
import EyeHide from '../assets/eye_hide.svg';
import Facebook from '../assets/facebook.svg';
import GooglePlus from '../assets/google+.svg';
import ResetSuccessfully from '../assets/reset_successfully.svg';
import LogoTop from '../assets/mm_logo_top.svg';
import RNRestart from 'react-native-restart';
import {
  ScrollView,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  BackHandler,
  Keyboard,
  SafeAreaView,
  LogBox,
} from 'react-native';

import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deviceHeight, deviceWidth, PixelDeviceHeight} from '../responsive';
import Loader from './loaderContainer';
import Cross from '../assets/cross.svg';
import {calcWidth} from '../responsive';
import {signoutRequest} from '../store/api';
import {getUserId} from '../store/bugs';
import {
  verifyEmail,
  verifyOtp,
  resetThePassword,
  msgReceived,
  isOtpVerified,
  resetPasswordMsg,
} from '../store/forgot';
import {BASE_URL, USER_LOGIN, YOUR_CLIENT_ID} from '../constants/urls';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/errorMessage';
import colors from '../config/colors';
import AppText from '../components/appText';
import {color} from 'react-native-reanimated';

const validateSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
const validateSchema2 = Yup.object().shape({
  resetEmail: Yup.string().required().email().label('ResetEmail'),
});

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const LoginContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const forgotEmail = useSelector(msgReceived);
  const otpVerified = useSelector(isOtpVerified);
  const resetPass = useSelector(resetPasswordMsg);

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailVerify, setIsEmailVerify] = useState(false);
  const [regEmailInputColor, setRegEmailInputColor] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [emailInputColor, setEmailInputColor] = useState(false);
  const [passwordInputColor, setPasswordInputColor] = useState(false);
  const [loginButtonInputColor, setLoginButtonInputColor] = useState(false);
  const [buttonInputColor, setButtonInputColor] = useState(false);

  const [forgotButtonInputColor, setForgotButtonInputColor] = useState(false);

  const [recoverUserEmailInputColor, setRecoverUserEmailInputColor] =
    useState(false);

  const [crossClick, setCrossClick] = useState(false);
  const [crossClick2, setCrossClick2] = useState(false);
  const [crossClick3, setCrossClick3] = useState(false);

  const [recoverUserEmail, setRecoverUserEmail] = useState('');

  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [thirdModalVisible, setThirdModalVisible] = useState(false);
  const [fourthModalVisible, setFourthModalVisible] = useState(false);
  const [resetPasswordInputColor, setResetPasswordInputColor] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPasswordInputColor, setNewPasswordInputColor] = useState(false);
  const [confirmNewPasswordInputColor, setConfirmNewPasswordInputColor] =
    useState(false);
  const [modalOtpBtn, setModalOtpBtn] = useState(false);

  const [newSecureText, setNewSecureText] = useState(true);
  const [confirmNewSecureText, setConfirmNewSecureText] = useState(true);

  const [newPasswordTextColor, setNewPasswordTextColor] = useState(false);
  const [confirmNewPasswordTextColor, setConfirmNewPasswordTextColor] =
    useState(false);

  const forgotMsgStatus = forgotEmail ? forgotEmail : '';
  const otpMsgStatus = otpVerified ? otpVerified : '';
  const resetPasswordStatus = resetPass ? resetPass : '';

  // const passwordRef = useRef();

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

  const handleSubmitPress = (userEmail, password) => {
    setErrorText('');

    setLoading(true);

    let dataToSend = {
      email: userEmail,
      password: password,
      device_id: YOUR_CLIENT_ID,
    };
    let formDetails = [];

    for (let key in dataToSend) {
      let encodeKey = encodeURIComponent(key);
      let encodeValue = encodeURIComponent(dataToSend[key]);
      formDetails.push(encodeKey + '=' + encodeValue);
    }

    formDetails = formDetails.join('&');

    const url = BASE_URL + USER_LOGIN;

    fetch(url, {
      method: 'POST',
      body: formDetails,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(res => {
        if (res.ok && (res.status === 404 || res.status === 503)) {
          throw new Error('Server error');
        } else {
          return res.json();
        }
      })
      .then(async json => {
        setLoading(false);
        console.log('from LoginContainer', json);

        // if login credenial is same
        if (json.Status === 'Success') {
          // console.log(json)

          const userKey = json.user_detail.access_key;
          const email = json.user_detail.email;
          const name = json.user_detail.name;
          const id = json.user_detail.uid;

          dispatch(getUserId(id));
          // store.dispatch(getUserId(id))

          await AsyncStorage.multiSet([
            ['userId', userKey],
            ['user_Id', id],
            ['userEmail', email],
            ['userName', name],
          ]);

          // RNRestart.Restart();
          return navigation.replace('Drawer');
        } else {
          setErrorText(json.Message);
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    userEmail ? setRegEmailInputColor(true) : setRegEmailInputColor(false);
    userEmail ? setButtonInputColor(true) : setButtonInputColor(false);
    resetPasswordInputColor
      ? setResetPasswordInputColor(true)
      : setResetPasswordInputColor(false);
    recoverUserEmail
      ? setRecoverUserEmailInputColor(true)
      : setRecoverUserEmailInputColor(false);
    one && two && three && four && five && six
      ? setModalOtpBtn(true)
      : setModalOtpBtn(false);

    recoverUserEmail
      ? setRecoverUserEmailInputColor(true)
      : setRecoverUserEmailInputColor(false);
    recoverUserEmail
      ? setResetPasswordInputColor(true)
      : setResetPasswordInputColor(false);
    newPassword
      ? setNewPasswordInputColor(true)
      : setNewPasswordInputColor(false);
    confirmNewPassword
      ? setConfirmNewPasswordInputColor(true)
      : setConfirmNewPasswordInputColor(false);
    newPassword && confirmNewPassword
      ? setResetPasswordInputColor(true)
      : setResetPasswordInputColor(false);
    newPassword
      ? setNewPasswordTextColor(true)
      : setNewPasswordTextColor(false);
    confirmNewPassword
      ? setConfirmNewPasswordTextColor(true)
      : setConfirmNewPasswordTextColor(false);
  });

  function backAction() {
    BackHandler.exitApp();
  }

  useEffect(() => {
    // dispatch(signoutRequest());
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  // Email Verify
  useEffect(() => {
    console.log('fromuseEffect', forgotMsgStatus);
    if (forgotMsgStatus === 'Error') {
      setFirstModalVisible(false);
      // dispatch(signoutRequest());
    }

    if (forgotMsgStatus === 'Success') {
      console.log('successssssss', forgotMsgStatus);
      setFirstModalVisible(false);
      setCrossClick(!crossClick);
    }
    dispatch(signoutRequest());
  }, [forgotMsgStatus]);

  useEffect(() => {
    if (!otpMsgStatus || otpMsgStatus === 'Error') {
      setSecondModalVisible(false);
    }

    if (otpMsgStatus === 'Success') {
      setSecondModalVisible(false);
      setCrossClick2(!crossClick2);
    }
    dispatch(signoutRequest());
  }, [otpMsgStatus]);

  useEffect(() => {
    if (resetPasswordStatus === 'Error') {
      setThirdModalVisible(false);
    }

    if (resetPasswordStatus === 'Success') {
      setThirdModalVisible(false);
      setCrossClick3(!crossClick3);
      // dispatch(signoutRequest());
    }
  }, [resetPasswordStatus]);

  return (
    <SafeAreaView
      style={{position: 'relative', flex: 1, backgroundColor: colors.white}}>
      {/* First Modal:  Email verify modal */}
      <Modal
        isVisible={firstModalVisible}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        hideModalContentWhileAnimating={true}
        useNativeDriver={false}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => {
          setFirstModalVisible(false);
        }}
        style={{margin: 0}}
        onModalHide={() => {
          crossClick && setSecondModalVisible(true);
          crossClick && setCrossClick(!crossClick);
        }}>
        <View style={styles.popup}>
          <View style={styles.cross}>
            <Pressable
              onPress={() => {
                setFirstModalVisible(false);
                setSecondModalVisible(false);
              }}>
              <Cross />
            </Pressable>
          </View>
          <View>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subTitle}>
              Enter your Registered email ID and we'll send you a OTP code for
              verification.
            </Text>
          </View>
          <Login.FormBox>
            <Login.Label>Email ID</Login.Label>
            <Login.IconBox>
              <Email />
            </Login.IconBox>
            <Login.RegEmailTextInput
              regEmailInputColor={regEmailInputColor}
              placeholderTextColor={colors.lightGrey3}
              placeholder="username@email.com"
              keyboardType="email-address"
              name="userEmail"
              value={recoverUserEmail}
              secure={true}
              onChangeText={text => setRecoverUserEmail(text)}
            />
          </Login.FormBox>

          <TouchableOpacity activeOpacity={0.6}>
            <Pressable
              disabled={recoverUserEmail ? false : true}
              onPress={() => dispatch(verifyEmail(recoverUserEmail))}
              style={[
                styles.button,
                {
                  backgroundColor: recoverUserEmail
                    ? colors.primary
                    : colors.lightGrey,
                },
              ]}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                  fontFamily: 'Open Sans Bold',
                }}>
                Send OTP
              </Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Second Modal:  Submit OTP Modal */}
      <Modal
        isVisible={secondModalVisible}
        onBackButtonPress={() => setSecondModalVisible(false)}
        onBackdropPress={() => setSecondModalVisible(false)}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        useNativeDriver={false}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        onModalHide={() => {
          crossClick2 && setThirdModalVisible(true);
          crossClick2 && setCrossClick2(!crossClick2);
        }}>
        <View style={styles.popup}>
          <View style={styles.cross}>
            <Pressable
              onPress={() => {
                setSecondModalVisible(false);
                setThirdModalVisible(false);
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
              keyboardType={'numeric'}
              ref={firstInputRef}
              placeholder="0"
              returnKeyType="next"
              value={one}
              maxLength={1}
              underlineColorAndroid="rgba(0,0,0,0)"
              numberOfLines={1}
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
              onChangeText={num => (
                setTwo(num), num && thirdInputRef.current.focus()
              )}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  firstInputRef.current.focus();
                  setOne();
                }
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
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  secondInputRef.current.focus();
                  setTwo();
                }
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
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  thirdInputRef.current.focus();
                  setThree();
                }
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
              onSubmitEditing={() => {
                sixthInputRef.current.focus();
              }}
              blurOnSubmit={false}
              onChangeText={num => {
                setFive(num);
                num && sixthInputRef.current.focus();
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  fourthInputRef.current.focus();
                  setFour();
                }
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
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  fifthInputRef.current.focus();
                  setFive();
                }
              }}
            />
          </View>
          <View style={styles.resendCode}>
            <Pressable onPress={() => console.log('resend code')}>
              <Text style={styles.resendCodeText}>Resend Code</Text>
            </Pressable>
          </View>
          <Pressable
            disabled={!modalOtpBtn}
            onPress={() => {
              const otp = one + two + three + four + five + six;
              dispatch(verifyOtp(recoverUserEmail, otp));
              setOne('');
              setTwo('');
              setThree('');
              setFour('');
              setFive('');
              setSix('');
            }}
            style={[
              styles.otpButton,
              {
                backgroundColor: `${
                  modalOtpBtn ? colors.primary : colors.lightGrey2
                }`,
              },
            ]}>
            <Text
              style={{
                color: colors.white,
                fontSize: 18,
                fontFamily: 'Open Sans Bold',
              }}>
              Submit
            </Text>
          </Pressable>
        </View>
      </Modal>

      {/* Third Modal: Reset Password */}
      <Modal
        isVisible={thirdModalVisible}
        onBackButtonPress={() => setThirdModalVisible(false)}
        onBackdropPress={() => setThirdModalVisible(false)}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        backdropTransitionOutTiming={0}
        useNativeDriver={false}
        style={{margin: 0}}
        onModalHide={() => {
          crossClick3 && setFourthModalVisible(true);
          crossClick3 && setCrossClick3(!crossClick3);
        }}>
        <View style={styles.popup}>
          <View style={styles.cross}>
            <Pressable
              onPress={() => {
                setThirdModalVisible(false), setFourthModalVisible(false);
              }}>
              <Cross />
            </Pressable>
          </View>
          <View>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subTitle}>Reset your password for safety</Text>
          </View>
          <Login.FormBox>
            <Login.Label>New Password</Login.Label>
            <Login.IconBox>
              <Password />
            </Login.IconBox>
            <Login.PasswordTextInput
              passwordInputColor={newPasswordInputColor}
              placeholderTextColor={colors.lightGrey3}
              placeholder="Please enter new password"
              keyboardType="default"
              // forwardRef={passwordRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={true}
              secureTextEntry={newSecureText}
              returnKeyType="next"
              value={newPassword}
              name="password"
              onChangeText={pass => setNewPassword(pass)}
            />
            <Login.IconBox2>
              <Pressable onPress={() => setNewSecureText(!newSecureText)}>
                {newSecureText ? <EyeHide /> : <Eye />}
              </Pressable>
            </Login.IconBox2>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                paddingLeft: 3,
                paddingTop: 3,
              }}>
              <Text
                style={[
                  styles.resetTextStyle,
                  {color: `${newPasswordTextColor ? '#1DDB5C' : '#FE1D1D'}`},
                ]}>
                Must contain alphabet and numericals with more than 8 characters
              </Text>
            </View>
          </Login.FormBox>
          <Login.FormBox>
            <Login.Label>Confirm New Password</Login.Label>
            <Login.IconBox>
              <Password />
            </Login.IconBox>
            <Login.PasswordTextInput
              passwordInputColor={confirmNewPasswordInputColor}
              placeholderTextColor={colors.lightGrey3}
              placeholder="Please enter new password"
              keyboardType="default"
              // forwardRef={passwordRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={true}
              secureTextEntry={confirmNewSecureText}
              returnKeyType="next"
              value={confirmNewPassword}
              name="password"
              onChangeText={pass => setConfirmNewPassword(pass)}
            />
            <Login.IconBox2>
              <Pressable
                onPress={() => setConfirmNewSecureText(!confirmNewSecureText)}>
                {confirmNewSecureText ? <EyeHide /> : <Eye />}
              </Pressable>
            </Login.IconBox2>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                paddingLeft: 3,
                paddingTop: 3,
              }}>
              <Text
                style={[
                  styles.resetTextStyle,
                  {
                    color: `${
                      confirmNewPasswordTextColor ? '#1DDB5C' : '#FE1D1D'
                    }`,
                  },
                ]}>
                Both password must match
              </Text>
            </View>
          </Login.FormBox>

          <Pressable
            disabled={!resetPasswordInputColor}
            onPress={() => {
              setThirdModalVisible(false);
              setCrossClick(!crossClick);
              dispatch(
                resetThePassword(
                  recoverUserEmail,
                  newPassword,
                  confirmNewPassword,
                ),
              );
            }}
            style={[
              styles.otpButton,
              {
                backgroundColor: `${
                  resetPasswordInputColor ? colors.primary : colors.lightGrey2
                }`,
              },
            ]}>
            <Text
              style={{
                color: colors.white,
                fontSize: 18,
                fontFamily: 'Open Sans Bold',
              }}>
              Submit
            </Text>
          </Pressable>
        </View>
      </Modal>

      {/* Reset Successfully: Success modal */}
      <Modal
        isVisible={fourthModalVisible}
        onBackButtonPress={() => setFourthModalVisible(false)}
        onBackdropPress={() => setFourthModalVisible(false)}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        backdropTransitionOutTiming={0}
        useNativeDriver={false}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30%',
        }}
        onModalHide={() => {
          setCrossClick(false);
        }}>
        <View
          style={[
            styles.popup,
            {
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            },
          ]}>
          <View style={styles.cross}>
            <Pressable onPress={() => setFourthModalVisible(false)}>
              <Cross />
            </Pressable>
          </View>
          <ResetSuccessfully />
          <View style={{marginTop: '15%'}}>
            <Text style={styles.title}>Reset Successfully</Text>
            <Text
              style={[
                styles.subTitle,
                {textAlign: 'center', marginBottom: '12%'},
              ]}>
              Your Password has been changed!
            </Text>
          </View>
          <View style={styles.success}>
            <Pressable
              onPress={() => {
                setFourthModalVisible(false), setRecoverUserEmail('');
                setOne('');
                setTwo('');
                setThree('');
                setFour('');
                setFive('');
                setSix('');
                setNewPassword('');
                setConfirmNewPassword('');
              }}>
              <Text style={styles.successText}>Go to Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Loader loading={loading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle="position"
        KeyboardVerticalOffset="0">
        <ScrollView>
          <View style={{height: deviceHeight}}>
            <Login>
              <Login.SmallLogoBox>
                <LogoTop width={200} height={80} />
              </Login.SmallLogoBox>
            </Login>
            <Login.LoginContainer>
              <Login.LoginFormBox>
                <Login.LoginTitle>Login</Login.LoginTitle>
                <Login.LoginSubTitle>Welcome back</Login.LoginSubTitle>
              </Login.LoginFormBox>

              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values =>
                  handleSubmitPress(values.email, values.password)
                }
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
                      <Login.Label>Email ID</Login.Label>
                      <Login.IconBox>
                        <Email />
                      </Login.IconBox>
                      <Login.EmailTextInput
                        emailInputColor={values.email ? true : false}
                        placeholderTextColor={colors.lightGrey3}
                        placeholder="username@email.com"
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        onBlur={() => setFieldTouched('email')}
                        // value={userEmail}
                        name="userEmail"
                        label="Email ID"
                        // onSubmitEditing={() => passwordRef.current.focus()}
                        onChangeText={handleChange('email')}
                      />
                    </Login.FormBox>
                    {/* <Text style={{color: 'red'}}>{errors.email}</Text> */}
                    <ErrorMessage
                      error={errors.email}
                      visible={touched.email}
                    />
                    <Login.FormBox>
                      <Login.Label>Password</Login.Label>
                      <Login.IconBox>
                        <Password />
                      </Login.IconBox>
                      <Login.PasswordTextInput
                        passwordInputColor={values.password ? true : false}
                        placeholderTextColor={colors.lightGrey3}
                        placeholder="Please enter password"
                        keyboardType="default"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={true}
                        secureTextEntry={secureText}
                        onBlur={() => setFieldTouched('password')}
                        returnKeyType="next"
                        name="password"
                        onChangeText={handleChange('password')}
                      />
                      <Login.IconBox2>
                        <Pressable onPress={() => setSecureText(!secureText)}>
                          {secureText ? <EyeHide /> : <Eye />}
                        </Pressable>
                      </Login.IconBox2>
                    </Login.FormBox>
                    {/* <Text style={{color: 'red'}}>{errors.password}</Text> */}
                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />

                    <Pressable
                      onPress={() => {
                        setFirstModalVisible(true);
                        // setCrossClick(false);
                      }}>
                      <Login.ForgotText>Forgot password?</Login.ForgotText>
                    </Pressable>
                    <TouchableOpacity activeOpacity={0.7}>
                      <Login.LoginFormButton
                        loginButtonInputColor={
                          values.email && values.password ? true : false
                        }
                        onPress={handleSubmit}>
                        <Text
                          style={{
                            fontFamily: 'Open Sans Bold',
                            color: colors.white,
                            fontSize: 18,
                            textAlign: 'center',
                          }}>
                          Login
                        </Text>
                      </Login.LoginFormButton>
                    </TouchableOpacity>
                  </>
                )}
              </Formik>

              {errorText != '' ? (
                <Text style={styles.errorTextStyle}>{errorText}</Text>
              ) : null}

              <Login.LineText />

              <Login.FormButtonBox>
                <Login.FormSelfButton bgColor={'#267dce'}>
                  <Login.FormIconBox>
                    <Facebook />
                  </Login.FormIconBox>
                  <Login.FormSelfText>Facebook</Login.FormSelfText>
                </Login.FormSelfButton>
                <Login.FormSelfButton bgColor={'#fe1d1d'}>
                  <Login.FormIconBox>
                    <GooglePlus />
                  </Login.FormIconBox>
                  <Login.FormSelfText>Google +</Login.FormSelfText>
                </Login.FormSelfButton>
              </Login.FormButtonBox>
              <Login.RegisterBox>
                <Login.RegisterTextBox>
                  Don't have an account{' '}
                </Login.RegisterTextBox>
                <Login.RegisterTextBox>
                  <Pressable
                    onPress={() => navigation.navigate('Registeration')}>
                    <AppText style={styles.linkText}>Register here</AppText>
                  </Pressable>
                </Login.RegisterTextBox>
              </Login.RegisterBox>
            </Login.LoginContainer>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
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
    fontSize: Number(`${calcWidth(7)}`),
    fontFamily: 'Open Sans Bold',
    color: '#212121',
  },
  subTitle: {
    color: colors.lightGrey,
    marginTop: 3,
  },
  button: {
    marginTop: 'auto',
    padding: '5%',
    borderRadius: 5,
    marginTop: '25%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  resendCode: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  resendCodeText: {
    fontSize: 16,
  },
  otp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  otpButton: {
    padding: '5%',
    borderRadius: 5,
    marginTop: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  digits: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  number: {
    fontFamily: 'Open Sans Bold',
    fontSize: 30,
    marginTop: 20,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.primaryDark,
    marginRight: 5,
    backgroundColor: '#0135671A',
    padding: 0,
    textAlign: 'center',
    color: '#212121',
  },
  resetTextStyle: {
    fontFamily: 'Open Sans Regular',
    fontSize: 8,
  },
  success: {
    backgroundColor: colors.primaryDark,
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  successText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Open Sans Bold',
    fontSize: 20,
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
