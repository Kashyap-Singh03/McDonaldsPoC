import {Formik} from 'formik';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Switch} from 'react-native-paper';
import CustomButton from '../../Components/CustomButton/CustomButton';
import LabeledInputTextField from '../../Components/LabeledInputTextField/LabeledInputTextField';
import {UIValidationSchema} from '../../Helper/UIValidationSchema';
import theme from '../../Theme/theme';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {signup_request} from './../../Redux/Action';

const SignUp = (props: any) => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.reducer.users);
  // console.log(users + '\n');

  const {navigation} = props;
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [gender, setGender] = useState('Male');

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    const newGender = isSwitchOn ? 'Male' : 'Female';
    setGender(newGender);
  };

  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };
  const formikRef = useRef();

  const onSubmit = (values: any) => {
    const user = {
      id: Math.random(),
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
      gender: gender,
    };
    dispatch(signup_request(user));
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    console.log('Users in the store:', users);
    // console.log("Is Login ",isLogin);
  }, [users]);

  return (
    <ScrollView
      keyboardDismissMode="interactive"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <KeyboardAvoidingView style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Assets/mcdonaldsIcon.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.viewHeaderStyle}>
          <Text style={styles.textHeaderStyle}>
            {baseLocalEng.SignIn.welcomeMsg}
          </Text>
          <Text style={styles.textHeaderStyle}>
            {baseLocalEng.SignUp.signUpMsg}
          </Text>
        </View>
        <View>
          <SafeAreaView>
            <View>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={UIValidationSchema().getCreateAccountValidationSchema()}
                //@ts-ignore
                innerRef={formikRef}>
                {({
                  values,
                  handleChange,
                  errors,
                  setFieldTouched,
                  touched,
                  isValid,
                  handleSubmit,
                }) => (
                  <View>
                    <LabeledInputTextField
                      value={values.name}
                      errorText={errors.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                      isError={touched.name && errors.name ? true : false}
                      labelText={baseLocalEng.SignUp.name}
                      lablePlaceHolder={baseLocalEng.SignUp.namePlaceHolder}
                    />
                    <LabeledInputTextField
                      value={values.email}
                      errorText={errors.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      isError={touched.email && errors.email ? true : false}
                      labelText={baseLocalEng.SignIn.email}
                      lablePlaceHolder={baseLocalEng.SignIn.emailPlaceHolder}
                    />
                    <LabeledInputTextField
                      value={values.phoneNumber}
                      errorText={errors.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={() => setFieldTouched('phoneNumber')}
                      maxLength={14}
                      keyboardType="phone-pad"
                      isError={
                        touched.phoneNumber && errors.phoneNumber ? true : false
                      }
                      labelText={baseLocalEng.SignUp.phone}
                      lablePlaceHolder={baseLocalEng.SignUp.phonePlaceHolder}
                    />
                    <LabeledInputTextField
                      value={values.password}
                      errorText={errors.password}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                      isError={
                        touched.password && errors.password ? true : false
                      }
                      labelText={baseLocalEng.SignIn.password}
                      lablePlaceHolder={baseLocalEng.SignIn.passwordPlaceHolder}
                      secureTextEntry={true}
                      isPassword={true}
                    />
                    <LabeledInputTextField
                      value={values.confirmPassword}
                      errorText={errors.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={() => setFieldTouched('confirmPassword')}
                      isError={
                        touched.confirmPassword && errors.confirmPassword
                          ? true
                          : false
                      }
                      labelText={baseLocalEng.SignUp.confirmPassword}
                      lablePlaceHolder={baseLocalEng.SignIn.passwordPlaceHolder}
                      secureTextEntry={true}
                      isPassword={true}
                    />
                    <Text style={styles.genderStyle}>
                      {baseLocalEng.SignUp.gender}
                    </Text>
                    <View style={styles.genderViewStyle}>
                      <Text style={styles.genderStyle1}>
                        {baseLocalEng.SignUp.male}
                      </Text>
                      <Switch
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                        color={theme.colors.disableBackgroundColor}
                        thumbColor={theme.colors.secondary}
                      />
                      <Text style={styles.genderStyle1}>
                        {baseLocalEng.SignUp.female}
                      </Text>
                    </View>
                    <View style={styles.btn}>
                      <CustomButton
                        text={baseLocalEng.SignUp.signUp}
                        width="100%"
                        disabled={false}
                        onPress={handleSubmit}></CustomButton>
                    </View>
                  </View>
                )}
              </Formik>
              <View style={styles.accountExistViewStyle}>
                <Text style={styles.accoutExistStyle}>
                  {baseLocalEng.SignUp.accountExistMsg}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignIn');
                  }}>
                  <Text style={styles.accoutExistBtnStyle}>
                    {baseLocalEng.SignUp.signIn}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;
