import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton/CustomButton';
import LabeledInputTextField from '../../Components/LabeledInputTextField/LabeledInputTextField';
import theme from '../../Theme/theme';
import {baseLocalEng} from './../../Localization/BaseLocalization';
import {update_profile_details_request} from './../../Redux/Action';
import {styles} from './style';

const UpdateProfileDetailsPage = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const userDetails = useSelector((state: any) => state.reducer.currentUser);
  const [name, setName] = useState(userDetails.name);
  const [phoneNumber, setPhoneNumber] = useState(userDetails.phoneNumber);

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      Alert.alert(
        baseLocalEng.updateProfileDetailsPage.error,
        baseLocalEng.updateProfileDetailsPage.nameRequired,
      );
      isValid = false;
    }
    if (!phoneNumber) {
      Alert.alert(
        baseLocalEng.updateProfileDetailsPage.error,
        baseLocalEng.updateProfileDetailsPage.phoneRequired,
      );
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      Alert.alert(
        baseLocalEng.updateProfileDetailsPage.error,
        baseLocalEng.updateProfileDetailsPage.validPhone,
      );
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = () => {
    if (validateForm()) {
      const data = {
        id: userDetails.id,
        name: name,
        phoneNumber: phoneNumber,
      };
      dispatch(update_profile_details_request(data));
      navigation.navigate('ProfilePage');
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
        <View>
          <SafeAreaView>
            <View>
              <View>
                <LabeledInputTextField
                  value={name}
                  onChangeText={txt => setName(txt)}
                  labelText={baseLocalEng.profilePage.name}
                  lablePlaceHolder={userDetails.name}
                />
                <LabeledInputTextField
                  value={phoneNumber}
                  onChangeText={txt => setPhoneNumber(txt)}
                  labelText={baseLocalEng.profilePage.phone}
                  lablePlaceHolder={userDetails.phoneNumber}
                />
                <View style={styles.btn}>
                  {name === userDetails.name &&
                  phoneNumber === userDetails.phoneNumber ? (
                    <CustomButton
                      disabled={true}
                      text={baseLocalEng.updateProfileDetailsPage.update}
                      backgroundColor={theme.colors.disableBackgroundColor}
                      borderColor={theme.colors.disableBackgroundColor}
                    />
                  ) : (
                    <CustomButton
                      text={baseLocalEng.updateProfileDetailsPage.update}
                      width="100%"
                      disabled={false}
                      onPress={onSubmit}
                    />
                  )}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default UpdateProfileDetailsPage;
