import {View, Text} from 'react-native';
import React from 'react';
import {check_request} from '../../Redux/Action';
import {useDispatch, useSelector} from 'react-redux';

const HomePage = () => {
  const loading = useSelector((state: any) => state.check.loading);
  const dispatch = useDispatch();
  const handle = () => {
    console.log('sdsadd');

    dispatch(check_request('kashyap'));
  };
  return (
    <View>
      <Text
        onPress={() => {
          handle();
        }}>
        HomePage
      </Text>
    </View>
  );
};

export default HomePage;
