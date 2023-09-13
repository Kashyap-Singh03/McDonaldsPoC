import {Formik} from 'formik';
import React, {useRef} from 'react';
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
import CustomButton from '../../Components/CustomButton/CustomButton';
import LabeledInputTextField from '../../Components/LabeledInputTextField/LabeledInputTextField';
import {UIValidationSchema} from '../../Helper/UIValidationSchema';
import theme from '../../Theme/theme';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {styles} from './style';

const SignInPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const formikRef = useRef();

  const onSubmit = (values: any) => {
    console.log(JSON.stringify(values));
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
                <TouchableOpacity onPress={() => {}}>
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
