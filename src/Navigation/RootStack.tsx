//@ts-nocheck
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import {useSelector} from 'react-redux';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const RootStack = () => {
  LogBox.ignoreAllLogs();
  const isLogin = useSelector((state: any) => state.reducer.isLogin);
  return (
    <NavigationContainer independent={true}>
      {isLogin ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootStack;
