import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
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

const SignUp = () => {
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
    console.log(JSON.stringify(values) + '\n' + gender);
  };

  return (
    <ScrollView
      keyboardDismissMode="interactive"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <KeyboardAvoidingView>
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
                <TouchableOpacity onPress={() => {}}>
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
