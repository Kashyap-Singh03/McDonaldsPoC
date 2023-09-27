import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import IntroPage from '../Screens/IntroPage/IntroPage';
import SignInPage from '../Screens/SignInPage/SignInPage';
import SignUpPage from '../Screens/SignUpPage/SignUpPage';
const Stack = createNativeStackNavigator();

const AuthNavigation = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'IntroPage'}
        component={IntroPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignUp'}
        component={SignUpPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignIn'}
        component={SignInPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
