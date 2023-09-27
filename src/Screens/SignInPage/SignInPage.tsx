import { Formik } from 'formik';
import React, { useRef } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../Components/CustomButton/CustomButton';
import LabeledInputTextField from '../../Components/LabeledInputTextField/LabeledInputTextField';
import { UIValidationSchema } from '../../Helper/UIValidationSchema';
import theme from '../../Theme/theme';
import { baseLocalEng } from './../../Localization/BaseLocalization';
import { login_request } from './../../Redux/Action';
import { styles } from './style';

const SignInPage = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.reducer.users);
  const initialValues = {
    email: '',
    password: '',
  };
  const formikRef = useRef();

  const onSubmit = (values: any) => {
    const user = users.find((user: any) => user.email === values.email);
    const userExist = users.some((user: any) => user.email === values.email);
    if (!userExist) {
      Alert.alert(
        baseLocalEng.SignIn.validationError,
        baseLocalEng.SignIn.emailNotFound,
      );
    } else if (userExist && user.password !== values.password) {
      Alert.alert(
        baseLocalEng.SignIn.validationError,
        baseLocalEng.SignIn.incorrectPassword,
      );
    } else if (userExist && user.password === values.password) {
      dispatch(login_request(user));
    } else {
      Alert.alert(baseLocalEng.SignIn.checkEmailAndPassword);
    }
  };

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
            {baseLocalEng.SignIn.loginMsg}
          </Text>
        </View>
        <View>
          <SafeAreaView>
            <View>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={UIValidationSchema().getSignInAccountValidationSchema()}
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
                      value={values.email}
                      errorText={errors.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      isError={touched.email && errors.email ? true : false}
                      labelText={baseLocalEng.SignIn.email}
                      lablePlaceHolder={baseLocalEng.SignIn.emailPlaceHolder}
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
                    <View style={styles.btn}>
                      <CustomButton
                        text={baseLocalEng.SignIn.signIn}
                        width="100%"
                        disabled={false}
                        onPress={handleSubmit}></CustomButton>
                    </View>
                  </View>
                )}
              </Formik>
              <View style={styles.accountExistViewStyle}>
                <Text style={styles.accoutExistStyle}>
                  {baseLocalEng.SignIn.noAccountMsg}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Text style={styles.accoutExistBtnStyle}>
                    {baseLocalEng.SignIn.signUp}
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

export default SignInPage;
